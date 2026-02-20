# OperaParametersDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Parameters** | Pointer to [**[]ApplicationSettingSimpleType**](ApplicationSettingSimpleType.md) | Represents a single application parameter and its value. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOperaParametersDetails

`func NewOperaParametersDetails() *OperaParametersDetails`

NewOperaParametersDetails instantiates a new OperaParametersDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperaParametersDetailsWithDefaults

`func NewOperaParametersDetailsWithDefaults() *OperaParametersDetails`

NewOperaParametersDetailsWithDefaults instantiates a new OperaParametersDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetParameters

`func (o *OperaParametersDetails) GetParameters() []ApplicationSettingSimpleType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *OperaParametersDetails) GetParametersOk() (*[]ApplicationSettingSimpleType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *OperaParametersDetails) SetParameters(v []ApplicationSettingSimpleType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *OperaParametersDetails) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetLinks

`func (o *OperaParametersDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OperaParametersDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OperaParametersDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OperaParametersDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OperaParametersDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OperaParametersDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OperaParametersDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OperaParametersDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


