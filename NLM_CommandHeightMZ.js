/*==========================================================================
 NLM_CommandHeightMZ.js
----------------------------------------------------------------------------
 (C)2023-2026 NoLimits
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.0.0 2023/07/22 試作版
 1.1.0 2026/03/29 他プラグインとの競合対策
============================================================================*/

/*:
 * @target MZ
 * @plugindesc MZ用コマンド行間設定プラグイン（v1.1.0)
 * @author ノリミツ(NoLimits)
 * @url https://github.com/nolimits-tukool
 * 
 * @orderAfter NLM_CardGameMZ
 * @orderAfter AltMenuScreen
 * @orderAfter AltMenuScreen2MZ
 * 
 * @param titleCommandHeight
 * @text タイトルコマンド高
 * @desc タイトルコマンド（ゲーム終了コマンド）の高さ　　　　　　　（デフォルト：72、ツクールデフォ：44）
 * @type number
 * @default 72
 * 
 * @param optionCommandHeight
 * @text オプションコマンド高
 * @desc オプションコマンドの高さ（デフォルト：72、ツクールデフォ：44、OptionEx.jsプラグイン併用時は適用されない）
 * @type number
 * @default 72
 * 
 * @param menuCommandHeight
 * @text メニューコマンド高
 * @desc メニューコマンドの高さ　　　　　　　　　　　　　　　　　（デフォルト：58、ツクールデフォ：44）
 * @type number
 * @default 58
 * 
 * @param horzCommandHeight
 * @text カテゴリーコマンド高
 * @desc カテゴリーコマンドの高さ　　　　　　　　　　　　　　　　（デフォルト：52、ツクールデフォ：44）
 * @type number
 * @default 52
 * 
 * @param itemListHeight
 * @text アイテムリスト高
 * @desc アイテムリストの高さ（デフォルト：58、ツクールデフォ：44）（NLM_CardLayoutMZ.js併用時はそちらが優先される）
 * @type number
 * @default 58
 * 
 * @param skillTypeHeight
 * @text スキルタイプ高
 * @desc スキルタイプの高さ（デフォルト：66、ツクールデフォ：44）
 * @type number
 * @default 66
 * 
 * @param skillListHeight
 * @text スキルリスト高
 * @desc スキルリストの高さ（デフォルト：58、ツクールデフォ：44）（NLM_CardLayoutMZ.js併用時はそちらが優先される）
 * @type number
 * @default 58
 * 
 * @param equipSlotHeight
 * @text 装備スロット高
 * @desc 装備スロットの高さ（デフォルト：72、ツクールデフォ：44）
 * @type number
 * @default 72
 * 
 * @param equipItemHeight
 * @text 装備アイテム高
 * @desc 装備アイテムの高さ（デフォルト：72、ツクールデフォ：44）（NLM_CardLayoutMZ.js併用時はそちらが優先される）
 * @type number
 * @default 72
 * 
 * @param shopBuyHeight
 * @text 店商品リスト高
 * @desc 店商品リストの高さ（デフォルト：72、ツクールデフォ：44）
 * @type number
 * @default 72
 * 
 * @param choiceListHeight
 * @text 選択肢高
 * @desc 選択肢の高さ（デフォルト：66、ツクールデフォ：44）　　　（直前文章がない時はY座標が中央寄せ表示になります）
 * @type number
 * @default 66
 * 
 * @param battleEnemyHeight
 * @text 敵リスト高
 * @desc 敵リストの高さ（デフォルト：72、ツクールデフォ：44）　　（NLM_CardLayoutMZ.js併用時はそちらが優先される）
 * @type number
 * @default 72
 * 
 * @param partyCommandHeight
 * @text パーティコマンド高
 * @desc 戦闘パーティコマンドの高さ　　　　　　　　　　　　　　　（デフォルト：88、ツクールデフォ：44）
 * @type number
 * @default 88
 * 
 * @param actorCommandHeight
 * @text アクターコマンド高
 * @desc 戦闘アクターコマンドの高さ　　　　　　　　　　　　　　　（デフォルト：58、ツクールデフォ：44）
 * @type number
 * @default 58
 * 
 * @param actorCommand
 * @text アクターコマンド内容
 * @desc 戦闘アクターコマンドリスト内容を以下に変更　　　　　　　（NLM_CardGameMZ.js設定時は各「コマンドなし」設定が無効）
 *
 * @param noAttackCommand
 * @parent actorCommand
 * @text 攻撃コマンドなし
 * @desc 攻撃コマンドを非表示（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param noGuardCommand
 * @parent actorCommand
 * @text 防御コマンドなし
 * @desc 防御コマンドを非表示（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param noItemCommand
 * @parent actorCommand
 * @text アイテムコマンドなし
 * @desc アイテムコマンドを非表示（デフォルト：OFF）
 * @type boolean
 * @default false
 * 
 * @param windowHeightAdapt
 * @parent actorCommand
 * @text Window高の超過許可
 * @desc アクターコマンドの高さがステータスWindowの高さを超える許可（デフォルト：ON、ツクールデフォ：OFF）
 * @type boolean
 * @default true
 * 
 * @param reductCursorJaggy
 * @text カーソルジャギー抑制
 * @desc カーソル辺縁に生じるジャギー（微細不要な点や線）を抑制する（デフォルト：ON、ツクールデフォ：OFF）
 * @type boolean
 * @default true
 *
 * 
 * @help 
 * 
 * 【RPGツクールMZ専用プラグイン】
 * 各コマンドやリストの行間を広げて表示します
 * 　 タッチ・クリック操作をしやすくする目的でつくりました
 * 　 右のパラメータで高さの微調整ができます
 * 
 * 戦闘アクターコマンドにおいて、ステータスウインドウの高さを超えて表示ができる
 *  のが特長です（OFFにもできます）
 * 
 * ただし、画面構成を改変する他のプラグインと競合しやすいので注意して下さい
 * （プラグイン配置を上下したり、本プラグインのパラメータ値を「0」やOFFに設定する
 *  ことで回避できる場合があります）
 * NLM_CardGameMZ.js や AltMenuScreen(2MZ).js 併用時は、本プラグインを これらより
 *「下」に配置して下さい
 * 
 * プラグインコマンドはありません
 * 利用規約はMITライセンスの通りです
 */

(() => {
  "use strict";

  const pluginName = "NLM_CommandHeightMZ";
  const NLMHparam  = PluginManager.parameters(pluginName);
  NLMHparam.titleCommandHeight  = Number(NLMHparam.titleCommandHeight)  || 0;
  NLMHparam.optionCommandHeight = Number(NLMHparam.optionCommandHeight) || 0;
  NLMHparam.menuCommandHeight   = Number(NLMHparam.menuCommandHeight)   || 0;
  NLMHparam.horzCommandHeight   = Number(NLMHparam.horzCommandHeight)   || 0;
  NLMHparam.itemListHeight      = Number(NLMHparam.itemListHeight)      || 0;
  NLMHparam.skillTypeHeight     = Number(NLMHparam.skillTypeHeight)     || 0;
  NLMHparam.skillListHeight     = Number(NLMHparam.skillListHeight)     || 0;
  NLMHparam.equipSlotHeight     = Number(NLMHparam.equipSlotHeight)     || 0;
  NLMHparam.equipItemHeight     = Number(NLMHparam.equipItemHeight)     || 0;
  NLMHparam.shopBuyHeight       = Number(NLMHparam.shopBuyHeight)       || 0;
  NLMHparam.choiceListHeight    = Number(NLMHparam.choiceListHeight)    || 0;
  NLMHparam.partyCommandHeight  = Number(NLMHparam.partyCommandHeight)  || 0;
  NLMHparam.actorCommandHeight  = Number(NLMHparam.actorCommandHeight)  || 0;
  NLMHparam.battleEnemyHeight   = Number(NLMHparam.battleEnemyHeight)   || 0;
  NLMHparam.noAttackCommand     = NLMHparam.noAttackCommand    === "true";
  NLMHparam.noGuardCommand      = NLMHparam.noGuardCommand     === "true";
  NLMHparam.noItemCommand       = NLMHparam.noItemCommand      === "true";

  // 他プラグインのパラメータ引継ぎ
  const NLCLparam = PluginManager.parameters("NLM_CardLayoutMZ");
  const NLMGparam = PluginManager.parameters("NLM_CardGameMZ");
  const AMS2param = PluginManager.parameters("AltMenuScreen2MZ");
  const OPEXparam = PluginManager.parameters("OptionEx");

  // コマンドウインドウの高さ調整
  const _SB_calcWindowHeight = Scene_Base.prototype.calcWindowHeight;
  Scene_Base.prototype.calcWindowHeight = function(numLines, command) { // command変更
    switch(command) {
      case "title":
        return Window_TitleCommand.prototype.fittingHeight(numLines);
      case "option":
        return Window_Options.prototype.fittingHeight(numLines);
      case "horz":
        return Window_HorzCommand.prototype.fittingHeight(numLines);
      case "menu":
        return Window_MenuCommand.prototype.fittingHeight(numLines);
      default:
        return _SB_calcWindowHeight.apply(this, arguments);
    }
  };

  // タイトル・終了コマンド
  if (NLMHparam.titleCommandHeight) {
    Window_TitleCommand.prototype.itemHeight = function() {
      return NLMHparam.titleCommandHeight;
    };

    Window_GameEnd.prototype.itemHeight = function() {
      return NLMHparam.titleCommandHeight;
    };

    const _ST_commandWindowRect = Scene_Title.prototype.commandWindowRect;
    Scene_Title.prototype.commandWindowRect = function() {
      const rect = _ST_commandWindowRect.call(this);
      rect.height = this.calcWindowHeight(3, "title");
      const offsetY = $dataSystem.titleCommandWindow.offsetY;
      const gH = Graphics.boxHeight;
      const nY = gH / 5 * 2 + (gH / 5 * 3 - rect.height) / 2 + offsetY
      const bY = gH - rect.height;
      rect.y = gH > (nY + rect.height) ? nY : bY;
      return rect;
    };

    const _SGE_commandWindowRect = Scene_GameEnd.prototype.commandWindowRect;
    Scene_GameEnd.prototype.commandWindowRect = function() {
      const rect  = _SGE_commandWindowRect.call(this);
      rect.height = this.calcWindowHeight(2, "title");
      rect.y = (Graphics.boxHeight - rect.height) / 2;
      return rect;
    };
  }

  // オプションコマンド
  if (NLMHparam.optionCommandHeight && !OPEXparam.windowWidth) {
    Window_Options.prototype.itemHeight = function() {
      return NLMHparam.optionCommandHeight;
    };

    const _SO_optionWindowRect = Scene_Options.prototype.optionsWindowRect;
    Scene_Options.prototype.optionsWindowRect = function() {
      const rect = _SO_optionWindowRect.call(this);
      const n = Math.min(this.maxCommands(), this.maxVisibleCommands());
      rect.height = this.calcWindowHeight(n, "option");
      rect.y = (Graphics.boxHeight - rect.height) / 2;
      return rect;
    };
  }

  // メニューコマンド
  if (NLMHparam.menuCommandHeight) {
    Window_MenuCommand.prototype.itemHeight = function() {
      return NLMHparam.menuCommandHeight;
    };

    Scene_MenuBase.prototype.commandWindowHeight = function() { // AltMenuScreen(2MZ)対策
      const rows = AMS2param.commandRows || 2;
      return this.calcWindowHeight(rows, "menu");
    };
  }

  // カテゴリーコマンド
  if (NLMHparam.horzCommandHeight) {
    Window_HorzCommand.prototype.itemHeight = function() {
      return NLMHparam.horzCommandHeight;
    };

    function Window_NLMHgold() { // ショップ専用のGoldウインドウを作成
      this.initialize(...arguments);
    }

    Window_NLMHgold.prototype = Object.create(Window_Gold.prototype);
    Window_NLMHgold.prototype.constructor = Window_NLMHgold;

    Window_NLMHgold.prototype.itemHeight = function() {
      return NLMHparam.horzCommandHeight;
    };

    const _SI_categoryWindowRect = Scene_Item.prototype.categoryWindowRect;
    Scene_Item.prototype.categoryWindowRect = function() {
      const rect  = _SI_categoryWindowRect.call(this);
      rect.height = this.calcWindowHeight(1, "horz");
      return rect;
    };

    const _SE_commandWindowRect = Scene_Equip.prototype.commandWindowRect;
    Scene_Equip.prototype.commandWindowRect = function() {
      const rect  = _SE_commandWindowRect.call(this);
      rect.height = this.calcWindowHeight(1, "horz");
      return rect;
    };

    Scene_Shop.prototype.createGoldWindow = function() {
      const rect = this.goldWindowRect();
      this._goldWindow = new Window_NLMHgold(rect);
      this.addWindow(this._goldWindow);
    };

    const _SS_goldWindowRect = Scene_Shop.prototype.goldWindowRect;
    Scene_Shop.prototype.goldWindowRect = function() {
      const rect  = _SS_goldWindowRect.call(this);
      rect.height = this.calcWindowHeight(1, "horz");
      return rect;
    };

    const _SS_commandWindowRect = Scene_Shop.prototype.commandWindowRect;
    Scene_Shop.prototype.commandWindowRect = function() {
      const rect  = _SS_commandWindowRect.call(this);
      rect.height = this.calcWindowHeight(1, "horz");
      return rect;
    };

    const _SS_categoryWindowRect = Scene_Shop.prototype.categoryWindowRect;
    Scene_Shop.prototype.categoryWindowRect = function() {
      const rect  = _SS_categoryWindowRect.call(this);
      rect.height = this.calcWindowHeight(1, "horz");
      return rect;
    };
  }

  // アイテムリスト
  if (NLMHparam.itemListHeight && NLCLparam.itemOn !== "true") {
    Window_ItemList.prototype.itemHeight = function() {
      return NLMHparam.itemListHeight;
    };
  }

  // スキルタイプ
  if (NLMHparam.skillTypeHeight) {
    Window_SkillType.prototype.itemHeight = function() {
      return NLMHparam.skillTypeHeight;
    };
  }

  // スキルリスト
  if (NLMHparam.skillListHeight && NLCLparam.skillOn !== "true") {
    Window_SkillList.prototype.itemHeight = function() {
      return NLMHparam.skillListHeight;
    };
  }

  // 装備アイテム
  if (NLMHparam.equipItemHeight && NLCLparam.itemOn !== "true") {
    Window_EquipItem.prototype.itemHeight = function() {
      return NLMHparam.equipItemHeight;
    };
  }

  // 装備スロット
  if (NLMHparam.equipSlotHeight) {
    Window_EquipSlot.prototype.itemHeight = function() {
      return NLMHparam.equipSlotHeight;
    };
  }

  // パーティコマンド
  if (NLMHparam.partyCommandHeight) {
    Window_PartyCommand.prototype.itemHeight = function() {
      return NLMHparam.partyCommandHeight;
    };
  }

  // アクターコマンド
  if (NLMHparam.actorCommandHeight) {
    Window_ActorCommand.prototype.itemHeight = function() {
      return NLMHparam.actorCommandHeight;
    };
  }

  /*
  // バトルログ
  Window_BattleLog.prototype.itemHeight = function() {
    return 36;
  };
  */

  // 戦闘敵リスト
  if (NLMHparam.battleEnemyHeight && NLCLparam.enemyOn !== "true") {
    Window_BattleEnemy.prototype.itemHeight = function() {
      return NLMHparam.battleEnemyHeight;
    };
  }

  // 店商品リスト
  if (NLMHparam.shopBuyHeight) {
    Window_ShopBuy.prototype.itemHeight = function() {
      return NLMHparam.shopBuyHeight;
    };
  }

  // 選択肢
  if (NLMHparam.choiceListHeight) {
    Window_ChoiceList.prototype.itemHeight = function() {
      return NLMHparam.choiceListHeight;
    };

    const _Window_ChoiceList_windowY = Window_ChoiceList.prototype.windowY;
    Window_ChoiceList.prototype.windowY = function() { // 直前文章がない時に中央表示
      if (!$gameMessage.hasText()) {
        return (Graphics.boxHeight - this.windowHeight()) / 2;
      } else {
        return _Window_ChoiceList_windowY.call(this);
      }
    };

    Window_ChoiceList.prototype.windowHeight = function() { // 画面はみ出し対策
      const n = this.fittingHeight($gameMessage.choices().length);
      const g = Graphics.boxHeight;
      const w = this._messageWindow;
      const d = g - w.height;
      if ($gameMessage.hasText()) {
        return Math.min(n, this.maxLines() === 4 ? d - w.y : d);
      } else {
        return Math.min(n, g);
      }
    };
  }

  // アクターコマンドリスト変更
  const _WAC_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
  Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
      if ((!NLMHparam.noAttackCommand && !NLMHparam.noGuardCommand && !NLMHparam.noItemCommand)
          || NLMGparam.commandAnno === "true") {
        _WAC_makeCommandList.apply(this, arguments);
      } else {
        this.NLMHmakeCommandList();
      }
      if (NLMHparam.windowHeightAdapt === "true") {
        const h = this.fittingHeight(this.maxItems());
        const f = Window_Command.prototype.fittingHeight(4);
        if (h > f) {
          this.height = h;
          this.y = Graphics.boxHeight - h;
        } else {
          this.height = f;
          this.y = Graphics.boxHeight - f;
        }
        this.createContents();
      }
    }
  };

  Window_ActorCommand.prototype.NLMHmakeCommandList = function() {
    if (!NLMHparam.noAttackCommand) this.addAttackCommand();
    this.addSkillCommands();
    if (!NLMHparam.noGuardCommand)  this.addGuardCommand();
    if (!NLMHparam.noItemCommand)   this.addItemCommand();
  };

  if (NLMHparam.reductCursorJaggy === "true") {
    Window.prototype._refreshCursor = function() {
      const drect = this._cursorRect.clone();
      const srect = { x: 97, y: 97, width: 46, height: 46 }; // 上下左右1ドットへらす
      const m = 4;
      for (const child of this._cursorSprite.children) {
        child.bitmap = this._windowskin;
      }
      this._setRectPartsGeometry(this._cursorSprite, srect, drect, m);
    };
  }
})();