# FolioArrangementCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioArrangementCodes** | Pointer to [**[]FolioArrangementCodeType**](FolioArrangementCodeType.md) | Details for folio arrangement code along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioArrangementCodes

`func NewFolioArrangementCodes() *FolioArrangementCodes`

NewFolioArrangementCodes instantiates a new FolioArrangementCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioArrangementCodesWithDefaults

`func NewFolioArrangementCodesWithDefaults() *FolioArrangementCodes`

NewFolioArrangementCodesWithDefaults instantiates a new FolioArrangementCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioArrangementCodes

`func (o *FolioArrangementCodes) GetFolioArrangementCodes() []FolioArrangementCodeType`

GetFolioArrangementCodes returns the FolioArrangementCodes field if non-nil, zero value otherwise.

### GetFolioArrangementCodesOk

`func (o *FolioArrangementCodes) GetFolioArrangementCodesOk() (*[]FolioArrangementCodeType, bool)`

GetFolioArrangementCodesOk returns a tuple with the FolioArrangementCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioArrangementCodes

`func (o *FolioArrangementCodes) SetFolioArrangementCodes(v []FolioArrangementCodeType)`

SetFolioArrangementCodes sets FolioArrangementCodes field to given value.

### HasFolioArrangementCodes

`func (o *FolioArrangementCodes) HasFolioArrangementCodes() bool`

HasFolioArrangementCodes returns a boolean if a field has been set.

### GetLinks

`func (o *FolioArrangementCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioArrangementCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioArrangementCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioArrangementCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioArrangementCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioArrangementCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioArrangementCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioArrangementCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


