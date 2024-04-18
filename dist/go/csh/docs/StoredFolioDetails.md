# StoredFolioDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**StoredFolioDetails** | Pointer to [**StoredFolioDetailsType**](StoredFolioDetailsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStoredFolioDetails

`func NewStoredFolioDetails() *StoredFolioDetails`

NewStoredFolioDetails instantiates a new StoredFolioDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStoredFolioDetailsWithDefaults

`func NewStoredFolioDetailsWithDefaults() *StoredFolioDetails`

NewStoredFolioDetailsWithDefaults instantiates a new StoredFolioDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *StoredFolioDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StoredFolioDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StoredFolioDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StoredFolioDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetStoredFolioDetails

`func (o *StoredFolioDetails) GetStoredFolioDetails() StoredFolioDetailsType`

GetStoredFolioDetails returns the StoredFolioDetails field if non-nil, zero value otherwise.

### GetStoredFolioDetailsOk

`func (o *StoredFolioDetails) GetStoredFolioDetailsOk() (*StoredFolioDetailsType, bool)`

GetStoredFolioDetailsOk returns a tuple with the StoredFolioDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioDetails

`func (o *StoredFolioDetails) SetStoredFolioDetails(v StoredFolioDetailsType)`

SetStoredFolioDetails sets StoredFolioDetails field to given value.

### HasStoredFolioDetails

`func (o *StoredFolioDetails) HasStoredFolioDetails() bool`

HasStoredFolioDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *StoredFolioDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StoredFolioDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StoredFolioDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StoredFolioDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

