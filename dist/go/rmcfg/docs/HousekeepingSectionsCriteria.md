# HousekeepingSectionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingSections** | Pointer to [**[]HousekeepingSectionType**](HousekeepingSectionType.md) | List of the housekeeping sections to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingSectionsCriteria

`func NewHousekeepingSectionsCriteria() *HousekeepingSectionsCriteria`

NewHousekeepingSectionsCriteria instantiates a new HousekeepingSectionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingSectionsCriteriaWithDefaults

`func NewHousekeepingSectionsCriteriaWithDefaults() *HousekeepingSectionsCriteria`

NewHousekeepingSectionsCriteriaWithDefaults instantiates a new HousekeepingSectionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingSections

`func (o *HousekeepingSectionsCriteria) GetHousekeepingSections() []HousekeepingSectionType`

GetHousekeepingSections returns the HousekeepingSections field if non-nil, zero value otherwise.

### GetHousekeepingSectionsOk

`func (o *HousekeepingSectionsCriteria) GetHousekeepingSectionsOk() (*[]HousekeepingSectionType, bool)`

GetHousekeepingSectionsOk returns a tuple with the HousekeepingSections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSections

`func (o *HousekeepingSectionsCriteria) SetHousekeepingSections(v []HousekeepingSectionType)`

SetHousekeepingSections sets HousekeepingSections field to given value.

### HasHousekeepingSections

`func (o *HousekeepingSectionsCriteria) HasHousekeepingSections() bool`

HasHousekeepingSections returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingSectionsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingSectionsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingSectionsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingSectionsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingSectionsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingSectionsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingSectionsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingSectionsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


