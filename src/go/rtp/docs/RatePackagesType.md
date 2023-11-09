# RatePackagesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageGroups** | Pointer to [**[]RatePackageGroupType**](RatePackageGroupType.md) | Package Group full Information along with the members that belong to this Group. | [optional] 
**Packages** | Pointer to [**RatePackageCodeListType**](RatePackageCodeListType.md) |  | [optional] 

## Methods

### NewRatePackagesType

`func NewRatePackagesType() *RatePackagesType`

NewRatePackagesType instantiates a new RatePackagesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePackagesTypeWithDefaults

`func NewRatePackagesTypeWithDefaults() *RatePackagesType`

NewRatePackagesTypeWithDefaults instantiates a new RatePackagesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageGroups

`func (o *RatePackagesType) GetPackageGroups() []RatePackageGroupType`

GetPackageGroups returns the PackageGroups field if non-nil, zero value otherwise.

### GetPackageGroupsOk

`func (o *RatePackagesType) GetPackageGroupsOk() (*[]RatePackageGroupType, bool)`

GetPackageGroupsOk returns a tuple with the PackageGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroups

`func (o *RatePackagesType) SetPackageGroups(v []RatePackageGroupType)`

SetPackageGroups sets PackageGroups field to given value.

### HasPackageGroups

`func (o *RatePackagesType) HasPackageGroups() bool`

HasPackageGroups returns a boolean if a field has been set.

### GetPackages

`func (o *RatePackagesType) GetPackages() RatePackageCodeListType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *RatePackagesType) GetPackagesOk() (*RatePackageCodeListType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *RatePackagesType) SetPackages(v RatePackageCodeListType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *RatePackagesType) HasPackages() bool`

HasPackages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


