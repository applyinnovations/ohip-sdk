# PackageGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PackageGroups** | Pointer to [**HotelPackageGroupsType**](HotelPackageGroupsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPackageGroup

`func NewPackageGroup() *PackageGroup`

NewPackageGroup instantiates a new PackageGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageGroupWithDefaults

`func NewPackageGroupWithDefaults() *PackageGroup`

NewPackageGroupWithDefaults instantiates a new PackageGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PackageGroup) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PackageGroup) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PackageGroup) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PackageGroup) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPackageGroups

`func (o *PackageGroup) GetPackageGroups() HotelPackageGroupsType`

GetPackageGroups returns the PackageGroups field if non-nil, zero value otherwise.

### GetPackageGroupsOk

`func (o *PackageGroup) GetPackageGroupsOk() (*HotelPackageGroupsType, bool)`

GetPackageGroupsOk returns a tuple with the PackageGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroups

`func (o *PackageGroup) SetPackageGroups(v HotelPackageGroupsType)`

SetPackageGroups sets PackageGroups field to given value.

### HasPackageGroups

`func (o *PackageGroup) HasPackageGroups() bool`

HasPackageGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PackageGroup) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PackageGroup) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PackageGroup) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PackageGroup) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


