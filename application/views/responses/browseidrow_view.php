<?php
/**
 * @var $id int
 * @var $surveyid int
 * @var $i int
 * @var $fnames array
 * @var $answervalue string
 * @var $inserthighlight string
 */
?>

<div class='side-body <?php echo getSideBodyClass(false); ?>'>
    <h3><?php echo sprintf(gT("View response ID %d"), $id); ?></h3>
    <div class="row">
        <div class="col-lg-12 content-right">
            <?php echo CHtml::form(["responses/browse/", ['surveyId' => $surveyid]], 'post', ['id' => 'resulttableform']); ?>
            <input id='downloadfile' name='downloadfile' value='' type='hidden'>
            <input id='sid' name='sid' value='<?php echo $surveyid; ?>' type='hidden'>
            <input id='subaction' name='subaction' value='all' type='hidden'>
            <?php echo CHtml::endForm() ?>

            <table class='detailbrowsetable table table-striped'>
                <?php if (!isset($fnames[$i]['type']) ||
                    (isset($fnames[$i]['type']) && $fnames[$i]['type'] !== '|') ||
                    (isset($fnames[$i]['type']) && $fnames[$i]['type'] === '|' && $answervalue !== '')
                ): ?>
                    <tr <?php echo $inserthighlight; ?>>
                        <th>
                            <?php if (isset($fnames[$i]['code'])) { ?>
                                [<strong class="qcode"><?php echo $fnames[$i]['code']; ?></strong>]
                            <?php } ?>
                            <?php echo strip_tags(stripJavaScript($fnames[$i][1])); ?></th>
                        <td>
                            <?php
                            echo $answervalue; ?>
                        </td>
                    </tr>
                <?php endif; ?>
            </table>
        </div>
    </div>
</div>
