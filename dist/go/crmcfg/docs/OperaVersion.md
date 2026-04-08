# OperaVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OperaVersion** | Pointer to **string** | Current Opera Version Number | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOperaVersion

`func NewOperaVersion() *OperaVersion`

NewOperaVersion instantiates a new OperaVersion object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperaVersionWithDefaults

`func NewOperaVersionWithDefaults() *OperaVersion`

NewOperaVersionWithDefaults instantiates a new OperaVersion object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperaVersion

`func (o *OperaVersion) GetOperaVersion() string`

GetOperaVersion returns the OperaVersion field if non-nil, zero value otherwise.

### GetOperaVersionOk

`func (o *OperaVersion) GetOperaVersionOk() (*string, bool)`

GetOperaVersionOk returns a tuple with the OperaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaVersion

`func (o *OperaVersion) SetOperaVersion(v string)`

SetOperaVersion sets OperaVersion field to given value.

### HasOperaVersion

`func (o *OperaVersion) HasOperaVersion() bool`

HasOperaVersion returns a boolean if a field has been set.

### GetLinks

`func (o *OperaVersion) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OperaVersion) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OperaVersion) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OperaVersion) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OperaVersion) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OperaVersion) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OperaVersion) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OperaVersion) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


