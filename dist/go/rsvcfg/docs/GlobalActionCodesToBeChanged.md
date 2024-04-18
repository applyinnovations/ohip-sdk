# GlobalActionCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GlobalActionCodes** | Pointer to [**[]GlobalActionCodeType**](GlobalActionCodeType.md) | List of Global Action Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGlobalActionCodesToBeChanged

`func NewGlobalActionCodesToBeChanged() *GlobalActionCodesToBeChanged`

NewGlobalActionCodesToBeChanged instantiates a new GlobalActionCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGlobalActionCodesToBeChangedWithDefaults

`func NewGlobalActionCodesToBeChangedWithDefaults() *GlobalActionCodesToBeChanged`

NewGlobalActionCodesToBeChangedWithDefaults instantiates a new GlobalActionCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGlobalActionCodes

`func (o *GlobalActionCodesToBeChanged) GetGlobalActionCodes() []GlobalActionCodeType`

GetGlobalActionCodes returns the GlobalActionCodes field if non-nil, zero value otherwise.

### GetGlobalActionCodesOk

`func (o *GlobalActionCodesToBeChanged) GetGlobalActionCodesOk() (*[]GlobalActionCodeType, bool)`

GetGlobalActionCodesOk returns a tuple with the GlobalActionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalActionCodes

`func (o *GlobalActionCodesToBeChanged) SetGlobalActionCodes(v []GlobalActionCodeType)`

SetGlobalActionCodes sets GlobalActionCodes field to given value.

### HasGlobalActionCodes

`func (o *GlobalActionCodesToBeChanged) HasGlobalActionCodes() bool`

HasGlobalActionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *GlobalActionCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GlobalActionCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GlobalActionCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GlobalActionCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GlobalActionCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GlobalActionCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GlobalActionCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GlobalActionCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

