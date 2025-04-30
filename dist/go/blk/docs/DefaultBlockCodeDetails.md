# DefaultBlockCodeDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCode** | Pointer to **string** | Business Block Code. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDefaultBlockCodeDetails

`func NewDefaultBlockCodeDetails() *DefaultBlockCodeDetails`

NewDefaultBlockCodeDetails instantiates a new DefaultBlockCodeDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefaultBlockCodeDetailsWithDefaults

`func NewDefaultBlockCodeDetailsWithDefaults() *DefaultBlockCodeDetails`

NewDefaultBlockCodeDetailsWithDefaults instantiates a new DefaultBlockCodeDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCode

`func (o *DefaultBlockCodeDetails) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *DefaultBlockCodeDetails) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *DefaultBlockCodeDetails) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *DefaultBlockCodeDetails) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetLinks

`func (o *DefaultBlockCodeDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DefaultBlockCodeDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DefaultBlockCodeDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DefaultBlockCodeDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DefaultBlockCodeDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DefaultBlockCodeDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DefaultBlockCodeDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DefaultBlockCodeDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


