import React from 'react';
import PropTypes from 'prop-types';

import RecommendationsPanel from 'widgets/RecommendationsPanel';
import hooks from 'widgets/ProductRecommendations/hooks';

export const WidgetSidebar = ({ setSidebarShowing }) => {
  const { inRecommendationsVariant, isExperimentActive } = hooks.useShowRecommendationsFooter();

  if (!inRecommendationsVariant && isExperimentActive) {
    setSidebarShowing(true);

    return (
      <div className="widget-sidebar">
        <div className="d-flex flex-column">
          <RecommendationsPanel />
        </div>
      </div>
    );
  }

  return null;
};

WidgetSidebar.propTypes = {
  setSidebarShowing: PropTypes.func.isRequired,
};

export default WidgetSidebar;
