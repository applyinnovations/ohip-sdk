# CateringPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PkgTmplts** | Pointer to [**[]CateringPackageType**](CateringPackageType.md) | Collection of multiple Catering Packages. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringPackage

`func NewCateringPackage() *CateringPackage`

NewCateringPackage instantiates a new CateringPackage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageWithDefaults

`func NewCateringPackageWithDefaults() *CateringPackage`

NewCateringPackageWithDefaults instantiates a new CateringPackage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CateringPackage) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringPackage) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringPackage) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringPackage) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPkgTmplts

`func (o *CateringPackage) GetPkgTmplts() []CateringPackageType`

GetPkgTmplts returns the PkgTmplts field if non-nil, zero value otherwise.

### GetPkgTmpltsOk

`func (o *CateringPackage) GetPkgTmpltsOk() (*[]CateringPackageType, bool)`

GetPkgTmpltsOk returns a tuple with the PkgTmplts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPkgTmplts

`func (o *CateringPackage) SetPkgTmplts(v []CateringPackageType)`

SetPkgTmplts sets PkgTmplts field to given value.

### HasPkgTmplts

`func (o *CateringPackage) HasPkgTmplts() bool`

HasPkgTmplts returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringPackage) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringPackage) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringPackage) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringPackage) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


