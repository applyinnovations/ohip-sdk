# CopyFolioArrangementCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of folio arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyFolioArrangementCodesRequest

`func NewCopyFolioArrangementCodesRequest() *CopyFolioArrangementCodesRequest`

NewCopyFolioArrangementCodesRequest instantiates a new CopyFolioArrangementCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyFolioArrangementCodesRequestWithDefaults

`func NewCopyFolioArrangementCodesRequestWithDefaults() *CopyFolioArrangementCodesRequest`

NewCopyFolioArrangementCodesRequestWithDefaults instantiates a new CopyFolioArrangementCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioArrangementCode

`func (o *CopyFolioArrangementCodesRequest) GetFolioArrangementCode() []CopyConfigurationCodeType`

GetFolioArrangementCode returns the FolioArrangementCode field if non-nil, zero value otherwise.

### GetFolioArrangementCodeOk

`func (o *CopyFolioArrangementCodesRequest) GetFolioArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetFolioArrangementCodeOk returns a tuple with the FolioArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioArrangementCode

`func (o *CopyFolioArrangementCodesRequest) SetFolioArrangementCode(v []CopyConfigurationCodeType)`

SetFolioArrangementCode sets FolioArrangementCode field to given value.

### HasFolioArrangementCode

`func (o *CopyFolioArrangementCodesRequest) HasFolioArrangementCode() bool`

HasFolioArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *CopyFolioArrangementCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyFolioArrangementCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyFolioArrangementCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyFolioArrangementCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyFolioArrangementCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyFolioArrangementCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyFolioArrangementCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyFolioArrangementCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


