# ChangeYieldAdjustmentCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**YieldAdjustmentCodes** | Pointer to [**[]YieldAdjustmentCodeType**](YieldAdjustmentCodeType.md) | Holds Yield AdjustmentCodes details. | [optional] 

## Methods

### NewChangeYieldAdjustmentCodesRequest

`func NewChangeYieldAdjustmentCodesRequest() *ChangeYieldAdjustmentCodesRequest`

NewChangeYieldAdjustmentCodesRequest instantiates a new ChangeYieldAdjustmentCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeYieldAdjustmentCodesRequestWithDefaults

`func NewChangeYieldAdjustmentCodesRequestWithDefaults() *ChangeYieldAdjustmentCodesRequest`

NewChangeYieldAdjustmentCodesRequestWithDefaults instantiates a new ChangeYieldAdjustmentCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeYieldAdjustmentCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeYieldAdjustmentCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeYieldAdjustmentCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeYieldAdjustmentCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeYieldAdjustmentCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeYieldAdjustmentCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeYieldAdjustmentCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeYieldAdjustmentCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetYieldAdjustmentCodes

`func (o *ChangeYieldAdjustmentCodesRequest) GetYieldAdjustmentCodes() []YieldAdjustmentCodeType`

GetYieldAdjustmentCodes returns the YieldAdjustmentCodes field if non-nil, zero value otherwise.

### GetYieldAdjustmentCodesOk

`func (o *ChangeYieldAdjustmentCodesRequest) GetYieldAdjustmentCodesOk() (*[]YieldAdjustmentCodeType, bool)`

GetYieldAdjustmentCodesOk returns a tuple with the YieldAdjustmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldAdjustmentCodes

`func (o *ChangeYieldAdjustmentCodesRequest) SetYieldAdjustmentCodes(v []YieldAdjustmentCodeType)`

SetYieldAdjustmentCodes sets YieldAdjustmentCodes field to given value.

### HasYieldAdjustmentCodes

`func (o *ChangeYieldAdjustmentCodesRequest) HasYieldAdjustmentCodes() bool`

HasYieldAdjustmentCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


