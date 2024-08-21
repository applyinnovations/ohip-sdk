# RegionsCodeCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegionsCode** | Pointer to [**[]RegionCodeType**](RegionCodeType.md) | List of Regions Code. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRegionsCodeCriteria

`func NewRegionsCodeCriteria() *RegionsCodeCriteria`

NewRegionsCodeCriteria instantiates a new RegionsCodeCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegionsCodeCriteriaWithDefaults

`func NewRegionsCodeCriteriaWithDefaults() *RegionsCodeCriteria`

NewRegionsCodeCriteriaWithDefaults instantiates a new RegionsCodeCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegionsCode

`func (o *RegionsCodeCriteria) GetRegionsCode() []RegionCodeType`

GetRegionsCode returns the RegionsCode field if non-nil, zero value otherwise.

### GetRegionsCodeOk

`func (o *RegionsCodeCriteria) GetRegionsCodeOk() (*[]RegionCodeType, bool)`

GetRegionsCodeOk returns a tuple with the RegionsCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionsCode

`func (o *RegionsCodeCriteria) SetRegionsCode(v []RegionCodeType)`

SetRegionsCode sets RegionsCode field to given value.

### HasRegionsCode

`func (o *RegionsCodeCriteria) HasRegionsCode() bool`

HasRegionsCode returns a boolean if a field has been set.

### GetLinks

`func (o *RegionsCodeCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RegionsCodeCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RegionsCodeCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RegionsCodeCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RegionsCodeCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RegionsCodeCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RegionsCodeCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RegionsCodeCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


