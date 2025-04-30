# StoredFolioDetailsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StoredFolioDetails** | Pointer to [**StoredFolioDetailsType**](StoredFolioDetailsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStoredFolioDetailsInfo

`func NewStoredFolioDetailsInfo() *StoredFolioDetailsInfo`

NewStoredFolioDetailsInfo instantiates a new StoredFolioDetailsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStoredFolioDetailsInfoWithDefaults

`func NewStoredFolioDetailsInfoWithDefaults() *StoredFolioDetailsInfo`

NewStoredFolioDetailsInfoWithDefaults instantiates a new StoredFolioDetailsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStoredFolioDetails

`func (o *StoredFolioDetailsInfo) GetStoredFolioDetails() StoredFolioDetailsType`

GetStoredFolioDetails returns the StoredFolioDetails field if non-nil, zero value otherwise.

### GetStoredFolioDetailsOk

`func (o *StoredFolioDetailsInfo) GetStoredFolioDetailsOk() (*StoredFolioDetailsType, bool)`

GetStoredFolioDetailsOk returns a tuple with the StoredFolioDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioDetails

`func (o *StoredFolioDetailsInfo) SetStoredFolioDetails(v StoredFolioDetailsType)`

SetStoredFolioDetails sets StoredFolioDetails field to given value.

### HasStoredFolioDetails

`func (o *StoredFolioDetailsInfo) HasStoredFolioDetails() bool`

HasStoredFolioDetails returns a boolean if a field has been set.

### GetLinks

`func (o *StoredFolioDetailsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StoredFolioDetailsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StoredFolioDetailsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StoredFolioDetailsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StoredFolioDetailsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StoredFolioDetailsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StoredFolioDetailsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StoredFolioDetailsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


