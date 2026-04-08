# FolioActivityDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioActivityDetailInfo** | Pointer to [**[]FolioActivityDetailType**](FolioActivityDetailType.md) | Details of Fiscal Folio Activity made. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioActivityDetailsType

`func NewFolioActivityDetailsType() *FolioActivityDetailsType`

NewFolioActivityDetailsType instantiates a new FolioActivityDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioActivityDetailsTypeWithDefaults

`func NewFolioActivityDetailsTypeWithDefaults() *FolioActivityDetailsType`

NewFolioActivityDetailsTypeWithDefaults instantiates a new FolioActivityDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioActivityDetailInfo

`func (o *FolioActivityDetailsType) GetFolioActivityDetailInfo() []FolioActivityDetailType`

GetFolioActivityDetailInfo returns the FolioActivityDetailInfo field if non-nil, zero value otherwise.

### GetFolioActivityDetailInfoOk

`func (o *FolioActivityDetailsType) GetFolioActivityDetailInfoOk() (*[]FolioActivityDetailType, bool)`

GetFolioActivityDetailInfoOk returns a tuple with the FolioActivityDetailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioActivityDetailInfo

`func (o *FolioActivityDetailsType) SetFolioActivityDetailInfo(v []FolioActivityDetailType)`

SetFolioActivityDetailInfo sets FolioActivityDetailInfo field to given value.

### HasFolioActivityDetailInfo

`func (o *FolioActivityDetailsType) HasFolioActivityDetailInfo() bool`

HasFolioActivityDetailInfo returns a boolean if a field has been set.

### GetLinks

`func (o *FolioActivityDetailsType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioActivityDetailsType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioActivityDetailsType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioActivityDetailsType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioActivityDetailsType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioActivityDetailsType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioActivityDetailsType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioActivityDetailsType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


