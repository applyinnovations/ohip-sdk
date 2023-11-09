# PackagesInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**PackageCodesList** | Pointer to [**PackagesInfoPackageCodesList**](PackagesInfoPackageCodesList.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPackagesInfo

`func NewPackagesInfo() *PackagesInfo`

NewPackagesInfo instantiates a new PackagesInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackagesInfoWithDefaults

`func NewPackagesInfoWithDefaults() *PackagesInfo`

NewPackagesInfoWithDefaults instantiates a new PackagesInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PackagesInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PackagesInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PackagesInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PackagesInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *PackagesInfo) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *PackagesInfo) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *PackagesInfo) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *PackagesInfo) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetPackageCodesList

`func (o *PackagesInfo) GetPackageCodesList() PackagesInfoPackageCodesList`

GetPackageCodesList returns the PackageCodesList field if non-nil, zero value otherwise.

### GetPackageCodesListOk

`func (o *PackagesInfo) GetPackageCodesListOk() (*PackagesInfoPackageCodesList, bool)`

GetPackageCodesListOk returns a tuple with the PackageCodesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCodesList

`func (o *PackagesInfo) SetPackageCodesList(v PackagesInfoPackageCodesList)`

SetPackageCodesList sets PackageCodesList field to given value.

### HasPackageCodesList

`func (o *PackagesInfo) HasPackageCodesList() bool`

HasPackageCodesList returns a boolean if a field has been set.

### GetWarnings

`func (o *PackagesInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PackagesInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PackagesInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PackagesInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


