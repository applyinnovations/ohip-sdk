# PackageGroupsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**PackageGroupList** | Pointer to [**PackageGroupsInfoPackageGroupList**](PackageGroupsInfoPackageGroupList.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPackageGroupsInfo

`func NewPackageGroupsInfo() *PackageGroupsInfo`

NewPackageGroupsInfo instantiates a new PackageGroupsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageGroupsInfoWithDefaults

`func NewPackageGroupsInfoWithDefaults() *PackageGroupsInfo`

NewPackageGroupsInfoWithDefaults instantiates a new PackageGroupsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PackageGroupsInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PackageGroupsInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PackageGroupsInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PackageGroupsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *PackageGroupsInfo) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *PackageGroupsInfo) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *PackageGroupsInfo) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *PackageGroupsInfo) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetPackageGroupList

`func (o *PackageGroupsInfo) GetPackageGroupList() PackageGroupsInfoPackageGroupList`

GetPackageGroupList returns the PackageGroupList field if non-nil, zero value otherwise.

### GetPackageGroupListOk

`func (o *PackageGroupsInfo) GetPackageGroupListOk() (*PackageGroupsInfoPackageGroupList, bool)`

GetPackageGroupListOk returns a tuple with the PackageGroupList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageGroupList

`func (o *PackageGroupsInfo) SetPackageGroupList(v PackageGroupsInfoPackageGroupList)`

SetPackageGroupList sets PackageGroupList field to given value.

### HasPackageGroupList

`func (o *PackageGroupsInfo) HasPackageGroupList() bool`

HasPackageGroupList returns a boolean if a field has been set.

### GetWarnings

`func (o *PackageGroupsInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PackageGroupsInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PackageGroupsInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PackageGroupsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


