# BedTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BedTypes** | Pointer to [**[]BedTypeType**](BedTypeType.md) | Bed Type Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBedTypesDetails

`func NewBedTypesDetails() *BedTypesDetails`

NewBedTypesDetails instantiates a new BedTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBedTypesDetailsWithDefaults

`func NewBedTypesDetailsWithDefaults() *BedTypesDetails`

NewBedTypesDetailsWithDefaults instantiates a new BedTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTypes

`func (o *BedTypesDetails) GetBedTypes() []BedTypeType`

GetBedTypes returns the BedTypes field if non-nil, zero value otherwise.

### GetBedTypesOk

`func (o *BedTypesDetails) GetBedTypesOk() (*[]BedTypeType, bool)`

GetBedTypesOk returns a tuple with the BedTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypes

`func (o *BedTypesDetails) SetBedTypes(v []BedTypeType)`

SetBedTypes sets BedTypes field to given value.

### HasBedTypes

`func (o *BedTypesDetails) HasBedTypes() bool`

HasBedTypes returns a boolean if a field has been set.

### GetLinks

`func (o *BedTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BedTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BedTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BedTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BedTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BedTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BedTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BedTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


