# PostYieldAdjustmentCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**YieldAdjustmentCodes** | Pointer to [**[]YieldAdjustmentCodeType**](YieldAdjustmentCodeType.md) | Holds Yield AdjustmentCodes details. | [optional] 

## Methods

### NewPostYieldAdjustmentCodesRequest

`func NewPostYieldAdjustmentCodesRequest() *PostYieldAdjustmentCodesRequest`

NewPostYieldAdjustmentCodesRequest instantiates a new PostYieldAdjustmentCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostYieldAdjustmentCodesRequestWithDefaults

`func NewPostYieldAdjustmentCodesRequestWithDefaults() *PostYieldAdjustmentCodesRequest`

NewPostYieldAdjustmentCodesRequestWithDefaults instantiates a new PostYieldAdjustmentCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostYieldAdjustmentCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostYieldAdjustmentCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostYieldAdjustmentCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostYieldAdjustmentCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostYieldAdjustmentCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostYieldAdjustmentCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostYieldAdjustmentCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostYieldAdjustmentCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetYieldAdjustmentCodes

`func (o *PostYieldAdjustmentCodesRequest) GetYieldAdjustmentCodes() []YieldAdjustmentCodeType`

GetYieldAdjustmentCodes returns the YieldAdjustmentCodes field if non-nil, zero value otherwise.

### GetYieldAdjustmentCodesOk

`func (o *PostYieldAdjustmentCodesRequest) GetYieldAdjustmentCodesOk() (*[]YieldAdjustmentCodeType, bool)`

GetYieldAdjustmentCodesOk returns a tuple with the YieldAdjustmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldAdjustmentCodes

`func (o *PostYieldAdjustmentCodesRequest) SetYieldAdjustmentCodes(v []YieldAdjustmentCodeType)`

SetYieldAdjustmentCodes sets YieldAdjustmentCodes field to given value.

### HasYieldAdjustmentCodes

`func (o *PostYieldAdjustmentCodesRequest) HasYieldAdjustmentCodes() bool`

HasYieldAdjustmentCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


