# FolioTypeLegendMappingConfigCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**FolioTypeLegendMappingConfigType**](FolioTypeLegendMappingConfigType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioTypeLegendMappingConfigCriteria

`func NewFolioTypeLegendMappingConfigCriteria() *FolioTypeLegendMappingConfigCriteria`

NewFolioTypeLegendMappingConfigCriteria instantiates a new FolioTypeLegendMappingConfigCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTypeLegendMappingConfigCriteriaWithDefaults

`func NewFolioTypeLegendMappingConfigCriteriaWithDefaults() *FolioTypeLegendMappingConfigCriteria`

NewFolioTypeLegendMappingConfigCriteriaWithDefaults instantiates a new FolioTypeLegendMappingConfigCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *FolioTypeLegendMappingConfigCriteria) GetCriteria() FolioTypeLegendMappingConfigType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *FolioTypeLegendMappingConfigCriteria) GetCriteriaOk() (*FolioTypeLegendMappingConfigType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *FolioTypeLegendMappingConfigCriteria) SetCriteria(v FolioTypeLegendMappingConfigType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *FolioTypeLegendMappingConfigCriteria) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *FolioTypeLegendMappingConfigCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioTypeLegendMappingConfigCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioTypeLegendMappingConfigCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioTypeLegendMappingConfigCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioTypeLegendMappingConfigCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioTypeLegendMappingConfigCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioTypeLegendMappingConfigCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioTypeLegendMappingConfigCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

