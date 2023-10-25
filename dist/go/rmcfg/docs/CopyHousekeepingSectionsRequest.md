# CopyHousekeepingSectionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingSections** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the housekeeping section code(s) to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyHousekeepingSectionsRequest

`func NewCopyHousekeepingSectionsRequest() *CopyHousekeepingSectionsRequest`

NewCopyHousekeepingSectionsRequest instantiates a new CopyHousekeepingSectionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyHousekeepingSectionsRequestWithDefaults

`func NewCopyHousekeepingSectionsRequestWithDefaults() *CopyHousekeepingSectionsRequest`

NewCopyHousekeepingSectionsRequestWithDefaults instantiates a new CopyHousekeepingSectionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingSections

`func (o *CopyHousekeepingSectionsRequest) GetHousekeepingSections() []CopyConfigurationCodeType`

GetHousekeepingSections returns the HousekeepingSections field if non-nil, zero value otherwise.

### GetHousekeepingSectionsOk

`func (o *CopyHousekeepingSectionsRequest) GetHousekeepingSectionsOk() (*[]CopyConfigurationCodeType, bool)`

GetHousekeepingSectionsOk returns a tuple with the HousekeepingSections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSections

`func (o *CopyHousekeepingSectionsRequest) SetHousekeepingSections(v []CopyConfigurationCodeType)`

SetHousekeepingSections sets HousekeepingSections field to given value.

### HasHousekeepingSections

`func (o *CopyHousekeepingSectionsRequest) HasHousekeepingSections() bool`

HasHousekeepingSections returns a boolean if a field has been set.

### GetLinks

`func (o *CopyHousekeepingSectionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyHousekeepingSectionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyHousekeepingSectionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyHousekeepingSectionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyHousekeepingSectionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyHousekeepingSectionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyHousekeepingSectionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyHousekeepingSectionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


