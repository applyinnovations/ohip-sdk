# DistrictsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Districts** | Pointer to [**[]DistrictType**](DistrictType.md) | List of Districts. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDistrictsDetails

`func NewDistrictsDetails() *DistrictsDetails`

NewDistrictsDetails instantiates a new DistrictsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistrictsDetailsWithDefaults

`func NewDistrictsDetailsWithDefaults() *DistrictsDetails`

NewDistrictsDetailsWithDefaults instantiates a new DistrictsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistricts

`func (o *DistrictsDetails) GetDistricts() []DistrictType`

GetDistricts returns the Districts field if non-nil, zero value otherwise.

### GetDistrictsOk

`func (o *DistrictsDetails) GetDistrictsOk() (*[]DistrictType, bool)`

GetDistrictsOk returns a tuple with the Districts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistricts

`func (o *DistrictsDetails) SetDistricts(v []DistrictType)`

SetDistricts sets Districts field to given value.

### HasDistricts

`func (o *DistrictsDetails) HasDistricts() bool`

HasDistricts returns a boolean if a field has been set.

### GetLinks

`func (o *DistrictsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DistrictsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DistrictsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DistrictsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DistrictsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DistrictsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DistrictsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DistrictsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


