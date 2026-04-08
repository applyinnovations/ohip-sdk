# YieldSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentCategory** | Pointer to [**AdjustmentCategoryType**](AdjustmentCategoryType.md) |  | [optional] 
**TotalAmount** | Pointer to **float32** | Total Amount of adjustment for this Adjustment category. | [optional] 

## Methods

### NewYieldSummaryType

`func NewYieldSummaryType() *YieldSummaryType`

NewYieldSummaryType instantiates a new YieldSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldSummaryTypeWithDefaults

`func NewYieldSummaryTypeWithDefaults() *YieldSummaryType`

NewYieldSummaryTypeWithDefaults instantiates a new YieldSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentCategory

`func (o *YieldSummaryType) GetAdjustmentCategory() AdjustmentCategoryType`

GetAdjustmentCategory returns the AdjustmentCategory field if non-nil, zero value otherwise.

### GetAdjustmentCategoryOk

`func (o *YieldSummaryType) GetAdjustmentCategoryOk() (*AdjustmentCategoryType, bool)`

GetAdjustmentCategoryOk returns a tuple with the AdjustmentCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCategory

`func (o *YieldSummaryType) SetAdjustmentCategory(v AdjustmentCategoryType)`

SetAdjustmentCategory sets AdjustmentCategory field to given value.

### HasAdjustmentCategory

`func (o *YieldSummaryType) HasAdjustmentCategory() bool`

HasAdjustmentCategory returns a boolean if a field has been set.

### GetTotalAmount

`func (o *YieldSummaryType) GetTotalAmount() float32`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *YieldSummaryType) GetTotalAmountOk() (*float32, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *YieldSummaryType) SetTotalAmount(v float32)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *YieldSummaryType) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


