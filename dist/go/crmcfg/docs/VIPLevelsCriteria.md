# VIPLevelsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VIPLevels** | Pointer to [**[]VIPLevelType**](VIPLevelType.md) | List of V I P Levels. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVIPLevelsCriteria

`func NewVIPLevelsCriteria() *VIPLevelsCriteria`

NewVIPLevelsCriteria instantiates a new VIPLevelsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVIPLevelsCriteriaWithDefaults

`func NewVIPLevelsCriteriaWithDefaults() *VIPLevelsCriteria`

NewVIPLevelsCriteriaWithDefaults instantiates a new VIPLevelsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVIPLevels

`func (o *VIPLevelsCriteria) GetVIPLevels() []VIPLevelType`

GetVIPLevels returns the VIPLevels field if non-nil, zero value otherwise.

### GetVIPLevelsOk

`func (o *VIPLevelsCriteria) GetVIPLevelsOk() (*[]VIPLevelType, bool)`

GetVIPLevelsOk returns a tuple with the VIPLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPLevels

`func (o *VIPLevelsCriteria) SetVIPLevels(v []VIPLevelType)`

SetVIPLevels sets VIPLevels field to given value.

### HasVIPLevels

`func (o *VIPLevelsCriteria) HasVIPLevels() bool`

HasVIPLevels returns a boolean if a field has been set.

### GetLinks

`func (o *VIPLevelsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VIPLevelsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VIPLevelsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VIPLevelsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VIPLevelsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VIPLevelsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VIPLevelsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VIPLevelsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


