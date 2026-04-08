# AdjustmentDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverriddenAmount** | Pointer to **float32** | The amount with which the actual adjustment will be overridden. if no amount is sent, default adjustment code&#39;s amount will be used. | [optional] 
**AdjustmentCode** | Pointer to **string** | the adjustment code that needs to be attached to the rate schedule. | [optional] 
**DeleteAdjustment** | Pointer to **bool** | Should this Adjustment code be deleted ? | [optional] 

## Methods

### NewAdjustmentDetailType

`func NewAdjustmentDetailType() *AdjustmentDetailType`

NewAdjustmentDetailType instantiates a new AdjustmentDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdjustmentDetailTypeWithDefaults

`func NewAdjustmentDetailTypeWithDefaults() *AdjustmentDetailType`

NewAdjustmentDetailTypeWithDefaults instantiates a new AdjustmentDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverriddenAmount

`func (o *AdjustmentDetailType) GetOverriddenAmount() float32`

GetOverriddenAmount returns the OverriddenAmount field if non-nil, zero value otherwise.

### GetOverriddenAmountOk

`func (o *AdjustmentDetailType) GetOverriddenAmountOk() (*float32, bool)`

GetOverriddenAmountOk returns a tuple with the OverriddenAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverriddenAmount

`func (o *AdjustmentDetailType) SetOverriddenAmount(v float32)`

SetOverriddenAmount sets OverriddenAmount field to given value.

### HasOverriddenAmount

`func (o *AdjustmentDetailType) HasOverriddenAmount() bool`

HasOverriddenAmount returns a boolean if a field has been set.

### GetAdjustmentCode

`func (o *AdjustmentDetailType) GetAdjustmentCode() string`

GetAdjustmentCode returns the AdjustmentCode field if non-nil, zero value otherwise.

### GetAdjustmentCodeOk

`func (o *AdjustmentDetailType) GetAdjustmentCodeOk() (*string, bool)`

GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCode

`func (o *AdjustmentDetailType) SetAdjustmentCode(v string)`

SetAdjustmentCode sets AdjustmentCode field to given value.

### HasAdjustmentCode

`func (o *AdjustmentDetailType) HasAdjustmentCode() bool`

HasAdjustmentCode returns a boolean if a field has been set.

### GetDeleteAdjustment

`func (o *AdjustmentDetailType) GetDeleteAdjustment() bool`

GetDeleteAdjustment returns the DeleteAdjustment field if non-nil, zero value otherwise.

### GetDeleteAdjustmentOk

`func (o *AdjustmentDetailType) GetDeleteAdjustmentOk() (*bool, bool)`

GetDeleteAdjustmentOk returns a tuple with the DeleteAdjustment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteAdjustment

`func (o *AdjustmentDetailType) SetDeleteAdjustment(v bool)`

SetDeleteAdjustment sets DeleteAdjustment field to given value.

### HasDeleteAdjustment

`func (o *AdjustmentDetailType) HasDeleteAdjustment() bool`

HasDeleteAdjustment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


