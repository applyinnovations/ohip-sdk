# OperaSettingsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActiveFunctions** | Pointer to **int32** | Count of active property services functions. | [optional] 
**Groups** | Pointer to [**[]ApplicationSettingGroupType**](ApplicationSettingGroupType.md) | Contains a collection of application settings for a particular group. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOperaSettingsDetails

`func NewOperaSettingsDetails() *OperaSettingsDetails`

NewOperaSettingsDetails instantiates a new OperaSettingsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperaSettingsDetailsWithDefaults

`func NewOperaSettingsDetailsWithDefaults() *OperaSettingsDetails`

NewOperaSettingsDetailsWithDefaults instantiates a new OperaSettingsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActiveFunctions

`func (o *OperaSettingsDetails) GetActiveFunctions() int32`

GetActiveFunctions returns the ActiveFunctions field if non-nil, zero value otherwise.

### GetActiveFunctionsOk

`func (o *OperaSettingsDetails) GetActiveFunctionsOk() (*int32, bool)`

GetActiveFunctionsOk returns a tuple with the ActiveFunctions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveFunctions

`func (o *OperaSettingsDetails) SetActiveFunctions(v int32)`

SetActiveFunctions sets ActiveFunctions field to given value.

### HasActiveFunctions

`func (o *OperaSettingsDetails) HasActiveFunctions() bool`

HasActiveFunctions returns a boolean if a field has been set.

### GetGroups

`func (o *OperaSettingsDetails) GetGroups() []ApplicationSettingGroupType`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *OperaSettingsDetails) GetGroupsOk() (*[]ApplicationSettingGroupType, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *OperaSettingsDetails) SetGroups(v []ApplicationSettingGroupType)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *OperaSettingsDetails) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetLinks

`func (o *OperaSettingsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OperaSettingsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OperaSettingsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OperaSettingsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OperaSettingsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OperaSettingsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OperaSettingsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OperaSettingsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


