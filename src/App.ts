import * as PIXI from 'pixi.js';


export class app
{
	app: PIXI.Application;

	constructor()
	{
		console.log("app.ts");
		(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ && (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
		console.log((window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__);

		this.app = new PIXI.Application({
			view: document.getElementById('game') as HTMLCanvasElement,
			backgroundColor: 0x1099bb,
			resizeTo: document.getElementById('game') as HTMLCanvasElement
		});

		document.body.appendChild(this.app.view);

		const rect = new PIXI.Graphics()
			.beginFill(0xff0000)
			.drawRect(0, 0, 100, 100);

		// Add it to the stage
		this.app.stage.addChild(rect);
	}
}

new app();