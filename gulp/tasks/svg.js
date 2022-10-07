import svgSprite from 'gulp-svg-sprite';

export const svg = () => {
	return app.gulp.src(`${app.path.src.svgIcons}/**/*.svg`)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: app.path.build.svgIcons
				}
			}
		}))
		.pipe(app.gulp.dest(app.path.buildFolder))
};