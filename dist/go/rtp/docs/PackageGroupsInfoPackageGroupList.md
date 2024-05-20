# PackageGroupsInfoPackageGroupList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**PackageGroups** | Pointer to [**[]HotelPackageGroupsType**](HotelPackageGroupsType.md) | Package Groups of each hotel. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewPackageGroupsInfoPackageGroupList

`func NewPackageGroupsInfoPackageGroupList() *PackageGroupsInfoPackageGroupList`

NewPackageGroupsInfoPackageGroupList instantiates a new PackageGroupsInfoPackageGroupList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageGroupsInfoPackageGroupListWithDefaults

`func NewPackageGroupsInfoPackageGroupListWithDefaults() *PackageGroupsInfoPackageGroupList`

NewPackageGroupsInfoPackageGroupListWithDefaults instantiates a new PackageGroupsInfoPackageGroupList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllRowsFetched

`func (o *PackageGroupsInfoPackageGroupList) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *PackageGroupsInfoPackageGroupList) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *PackageGroupsInfoPackageGroupList) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *PackageGroupsInfoPackageGroupList) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetPackageGroups

`func (o *PackageGroupsInfoPackageGroupList) GetPackageGroups() []HotelPackageGroupsType`

GetPackageGroups returns the PackageGroups field if non-nil, zero value otherwise.

### GetPackageGroupsOk

`func (o *PackageGroupsInfoPackageGroupList) GetPackageGroupsOk() (*[]HotelPackageGroupsType, bool)`

GetPackageGroupsOk returns a tuple with the PackageGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroups

`func (o *PackageGroupsInfoPackageGroupList) SetPackageGroups(v []HotelPackageGroupsType)`

SetPackageGroups sets PackageGroups field to given value.

### HasPackageGroups

`func (o *PackageGroupsInfoPackageGroupList) HasPackageGroups() bool`

HasPackageGroups returns a boolean if a field has been set.

### GetTotalRows

`func (o *PackageGroupsInfoPackageGroupList) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *PackageGroupsInfoPackageGroupList) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *PackageGroupsInfoPackageGroupList) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *PackageGroupsInfoPackageGroupList) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


