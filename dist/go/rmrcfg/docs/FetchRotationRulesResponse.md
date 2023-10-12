# FetchRotationRulesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationRulesResult** | Pointer to [**RotationRulesResultType**](RotationRulesResultType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchRotationRulesResponse

`func NewFetchRotationRulesResponse() *FetchRotationRulesResponse`

NewFetchRotationRulesResponse instantiates a new FetchRotationRulesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchRotationRulesResponseWithDefaults

`func NewFetchRotationRulesResponseWithDefaults() *FetchRotationRulesResponse`

NewFetchRotationRulesResponseWithDefaults instantiates a new FetchRotationRulesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationRulesResult

`func (o *FetchRotationRulesResponse) GetRotationRulesResult() RotationRulesResultType`

GetRotationRulesResult returns the RotationRulesResult field if non-nil, zero value otherwise.

### GetRotationRulesResultOk

`func (o *FetchRotationRulesResponse) GetRotationRulesResultOk() (*RotationRulesResultType, bool)`

GetRotationRulesResultOk returns a tuple with the RotationRulesResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationRulesResult

`func (o *FetchRotationRulesResponse) SetRotationRulesResult(v RotationRulesResultType)`

SetRotationRulesResult sets RotationRulesResult field to given value.

### HasRotationRulesResult

`func (o *FetchRotationRulesResponse) HasRotationRulesResult() bool`

HasRotationRulesResult returns a boolean if a field has been set.

### GetLinks

`func (o *FetchRotationRulesResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchRotationRulesResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchRotationRulesResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchRotationRulesResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchRotationRulesResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchRotationRulesResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchRotationRulesResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchRotationRulesResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


