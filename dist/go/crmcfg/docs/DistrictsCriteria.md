# DistrictsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Districts** | Pointer to [**[]DistrictType**](DistrictType.md) | List of Districts. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDistrictsCriteria

`func NewDistrictsCriteria() *DistrictsCriteria`

NewDistrictsCriteria instantiates a new DistrictsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistrictsCriteriaWithDefaults

`func NewDistrictsCriteriaWithDefaults() *DistrictsCriteria`

NewDistrictsCriteriaWithDefaults instantiates a new DistrictsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistricts

`func (o *DistrictsCriteria) GetDistricts() []DistrictType`

GetDistricts returns the Districts field if non-nil, zero value otherwise.

### GetDistrictsOk

`func (o *DistrictsCriteria) GetDistrictsOk() (*[]DistrictType, bool)`

GetDistrictsOk returns a tuple with the Districts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistricts

`func (o *DistrictsCriteria) SetDistricts(v []DistrictType)`

SetDistricts sets Districts field to given value.

### HasDistricts

`func (o *DistrictsCriteria) HasDistricts() bool`

HasDistricts returns a boolean if a field has been set.

### GetLinks

`func (o *DistrictsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DistrictsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DistrictsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DistrictsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DistrictsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DistrictsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DistrictsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DistrictsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


