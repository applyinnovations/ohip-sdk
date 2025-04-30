# TemplateOutOfOrderServiceReasonType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description for the out of order/service reason. | [optional] 
**Sequence** | Pointer to **int32** | Sequence number for displaying the out of order/service reason. | [optional] 
**ReasonCode** | Pointer to **string** | Out of order/service reason code identifying the reason. | [optional] 
**Inactive** | Pointer to **bool** | Indicator that tells whether the out of order/service reason in the hotel is active or not. | [optional] 
**IncludeInStatisticsYn** | Pointer to **bool** | Indicator for RNA to use to decide whether to include this room status in statistics, with no functional impact. | [optional] 
**DeductYn** | Pointer to **bool** | Indicator for room status display. Room status configured with &#39;true&#39; will be displayed as OOO, &#39;false&#39; will be displayed as OOS. | [optional] 
**ReturnTimeRequired** | Pointer to **bool** | Indicator for Return Time Required display. If configured to true, then a time will be mandatory to determine when this unit (room) will be back to the inventory of the available rooms. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewTemplateOutOfOrderServiceReasonType

`func NewTemplateOutOfOrderServiceReasonType() *TemplateOutOfOrderServiceReasonType`

NewTemplateOutOfOrderServiceReasonType instantiates a new TemplateOutOfOrderServiceReasonType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateOutOfOrderServiceReasonTypeWithDefaults

`func NewTemplateOutOfOrderServiceReasonTypeWithDefaults() *TemplateOutOfOrderServiceReasonType`

NewTemplateOutOfOrderServiceReasonTypeWithDefaults instantiates a new TemplateOutOfOrderServiceReasonType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateOutOfOrderServiceReasonType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateOutOfOrderServiceReasonType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateOutOfOrderServiceReasonType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateOutOfOrderServiceReasonType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateOutOfOrderServiceReasonType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateOutOfOrderServiceReasonType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateOutOfOrderServiceReasonType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateOutOfOrderServiceReasonType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetReasonCode

`func (o *TemplateOutOfOrderServiceReasonType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *TemplateOutOfOrderServiceReasonType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *TemplateOutOfOrderServiceReasonType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *TemplateOutOfOrderServiceReasonType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateOutOfOrderServiceReasonType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateOutOfOrderServiceReasonType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateOutOfOrderServiceReasonType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateOutOfOrderServiceReasonType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIncludeInStatisticsYn

`func (o *TemplateOutOfOrderServiceReasonType) GetIncludeInStatisticsYn() bool`

GetIncludeInStatisticsYn returns the IncludeInStatisticsYn field if non-nil, zero value otherwise.

### GetIncludeInStatisticsYnOk

`func (o *TemplateOutOfOrderServiceReasonType) GetIncludeInStatisticsYnOk() (*bool, bool)`

GetIncludeInStatisticsYnOk returns a tuple with the IncludeInStatisticsYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeInStatisticsYn

`func (o *TemplateOutOfOrderServiceReasonType) SetIncludeInStatisticsYn(v bool)`

SetIncludeInStatisticsYn sets IncludeInStatisticsYn field to given value.

### HasIncludeInStatisticsYn

`func (o *TemplateOutOfOrderServiceReasonType) HasIncludeInStatisticsYn() bool`

HasIncludeInStatisticsYn returns a boolean if a field has been set.

### GetDeductYn

`func (o *TemplateOutOfOrderServiceReasonType) GetDeductYn() bool`

GetDeductYn returns the DeductYn field if non-nil, zero value otherwise.

### GetDeductYnOk

`func (o *TemplateOutOfOrderServiceReasonType) GetDeductYnOk() (*bool, bool)`

GetDeductYnOk returns a tuple with the DeductYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductYn

`func (o *TemplateOutOfOrderServiceReasonType) SetDeductYn(v bool)`

SetDeductYn sets DeductYn field to given value.

### HasDeductYn

`func (o *TemplateOutOfOrderServiceReasonType) HasDeductYn() bool`

HasDeductYn returns a boolean if a field has been set.

### GetReturnTimeRequired

`func (o *TemplateOutOfOrderServiceReasonType) GetReturnTimeRequired() bool`

GetReturnTimeRequired returns the ReturnTimeRequired field if non-nil, zero value otherwise.

### GetReturnTimeRequiredOk

`func (o *TemplateOutOfOrderServiceReasonType) GetReturnTimeRequiredOk() (*bool, bool)`

GetReturnTimeRequiredOk returns a tuple with the ReturnTimeRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnTimeRequired

`func (o *TemplateOutOfOrderServiceReasonType) SetReturnTimeRequired(v bool)`

SetReturnTimeRequired sets ReturnTimeRequired field to given value.

### HasReturnTimeRequired

`func (o *TemplateOutOfOrderServiceReasonType) HasReturnTimeRequired() bool`

HasReturnTimeRequired returns a boolean if a field has been set.

### GetManagedBy

`func (o *TemplateOutOfOrderServiceReasonType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *TemplateOutOfOrderServiceReasonType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *TemplateOutOfOrderServiceReasonType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *TemplateOutOfOrderServiceReasonType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


