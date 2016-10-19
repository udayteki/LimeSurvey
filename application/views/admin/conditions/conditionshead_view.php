<div class='side-body <?php echo getSideBodyClass(false); ?>'>
    <?php $this->renderPartial('/admin/survey/breadcrumb', array('oQuestion'=>$oQuestion, 'active'=>gT("Conditions designer") )); ?>
    <h3>
        <?php eT("Conditions designer"); ?>

        <?php if ($scenariocount > 0): ?>
            <button
                id='delete-all-conditions'
                data-toggle='modal'
                data-target='#confirmation-modal'
                data-message='<?php eT('Are you sure you want to delete all conditions for this question?', 'js'); ?>'
                data-onclick='(function() { document.getElementById("deleteallconditions").submit(); })'
                class='btn btn-warning pull-right condition-header-button'
                onclick='return false';
            >
                <span class="glyphicon glyphicon-trash"></span>
                &nbsp;
                <?php eT('Delete all conditions'); ?>
            </button>
        <?php endif; ?>

        <?php if ($scenariocount > 1): ?>
            <button
                id='renumber-scenario'
                class="btn btn-default pull-right condition-header-button"
                data-toggle='modal'
                data-target='#confirmation-modal'
                data-message='<?php eT('Are you sure you want to renumber the scenarios with incremented numbers beginning from 1?', 'js'); ?>'
                data-onclick='(function() { document.getElementById("toplevelsubaction").value="renumberscenarios"; document.getElementById("deleteallconditions").submit();})'
                onclick='return false;'
            >
                <span class="icon-renumber"></span>
                &nbsp;
                <?php eT("Renumber scenario automatically");?>
            </button>
        <?php endif; ?>

        <button
            id='quick-add-condition-button'
            class='btn btn-default pull-right condition-header-button'
            data-toggle='modal'
            data-target='#quick-add-condition-modal'
        >
            <span class="fa fa-plus-circle"></span>
            &nbsp;
            <?php eT('Quick-add conditions'); ?>
        </button>
    </h3>
     <div class="row">
        <div class="col-lg-12 content-right">


<?php echo $conditionsoutput_action_error;?>
<?php echo $javascriptpre;?>

<!-- Modal for quick add -->
<div id="quick-add-condition-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">  <?php // JS add not.type as panel-type, e.g. panel-default, panel-danger ?>
            <div class="modal-header panel-heading">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><?php eT('Quick-add conditions'); ?></h4>
            </div>
            <div class="modal-body">
                <?php echo $quickAddConditionForm; ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">&nbsp;<?php eT("Close"); ?></button>
                <button type='submit' class='btn btn-primary'><?php eT('Save'); ?></button>
            </div>
        </div>
    </div>
</div>
