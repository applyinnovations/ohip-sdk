# CateringPackages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringPackageList** | Pointer to [**[]BlockCateringPackageType**](BlockCateringPackageType.md) | Collection of multiple Catering Packages. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCateringPackages

`func NewCateringPackages() *CateringPackages`

NewCateringPackages instantiates a new CateringPackages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackagesWithDefaults

`func NewCateringPackagesWithDefaults() *CateringPackages`

NewCateringPackagesWithDefaults instantiates a new CateringPackages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringPackageList

`func (o *CateringPackages) GetCateringPackageList() []BlockCateringPackageType`

GetCateringPackageList returns the CateringPackageList field if non-nil, zero value otherwise.

### GetCateringPackageListOk

`func (o *CateringPackages) GetCateringPackageListOk() (*[]BlockCateringPackageType, bool)`

GetCateringPackageListOk returns a tuple with the CateringPackageList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringPackageList

`func (o *CateringPackages) SetCateringPackageList(v []BlockCateringPackageType)`

SetCateringPackageList sets CateringPackageList field to given value.

### HasCateringPackageList

`func (o *CateringPackages) HasCateringPackageList() bool`

HasCateringPackageList returns a boolean if a field has been set.

### GetLinks

`func (o *CateringPackages) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringPackages) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringPackages) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringPackages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringPackages) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringPackages) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringPackages) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringPackages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


