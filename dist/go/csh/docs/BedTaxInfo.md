# BedTaxInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BedTaxInfoTypes** | Pointer to [**[]BedTaxInfoType**](BedTaxInfoType.md) | List of Bed Tax info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBedTaxInfo

`func NewBedTaxInfo() *BedTaxInfo`

NewBedTaxInfo instantiates a new BedTaxInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBedTaxInfoWithDefaults

`func NewBedTaxInfoWithDefaults() *BedTaxInfo`

NewBedTaxInfoWithDefaults instantiates a new BedTaxInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTaxInfoTypes

`func (o *BedTaxInfo) GetBedTaxInfoTypes() []BedTaxInfoType`

GetBedTaxInfoTypes returns the BedTaxInfoTypes field if non-nil, zero value otherwise.

### GetBedTaxInfoTypesOk

`func (o *BedTaxInfo) GetBedTaxInfoTypesOk() (*[]BedTaxInfoType, bool)`

GetBedTaxInfoTypesOk returns a tuple with the BedTaxInfoTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTaxInfoTypes

`func (o *BedTaxInfo) SetBedTaxInfoTypes(v []BedTaxInfoType)`

SetBedTaxInfoTypes sets BedTaxInfoTypes field to given value.

### HasBedTaxInfoTypes

`func (o *BedTaxInfo) HasBedTaxInfoTypes() bool`

HasBedTaxInfoTypes returns a boolean if a field has been set.

### GetLinks

`func (o *BedTaxInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BedTaxInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BedTaxInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BedTaxInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BedTaxInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BedTaxInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BedTaxInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BedTaxInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


