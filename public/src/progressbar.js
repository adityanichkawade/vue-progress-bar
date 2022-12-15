define(function() {
    'use strict';
    return {
        props: ['val'],
        template: `
        <div class="progress-bar">
          <div class="progress-bar__value">{{val}}%</div>
          <div :style="{'width': val + '%'}" class="progress-bar__fill"></div>
        </div>`
    }
}); 