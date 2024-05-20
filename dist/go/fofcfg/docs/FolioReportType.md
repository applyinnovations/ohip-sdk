# FolioReportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Language** | Pointer to **string** | Language identification. | [optional] 
**ReportGroup** | Pointer to [**FolioReportGroupType**](FolioReportGroupType.md) |  | [optional] 
**ReportName** | Pointer to **string** | Name of the .REP or .RDF file. .REP or .RDF extension is not needed. | [optional] 

## Methods

### NewFolioReportType

`func NewFolioReportType() *FolioReportType`

NewFolioReportType instantiates a new FolioReportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioReportTypeWithDefaults

`func NewFolioReportTypeWithDefaults() *FolioReportType`

NewFolioReportTypeWithDefaults instantiates a new FolioReportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLanguage

`func (o *FolioReportType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *FolioReportType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *FolioReportType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *FolioReportType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetReportGroup

`func (o *FolioReportType) GetReportGroup() FolioReportGroupType`

GetReportGroup returns the ReportGroup field if non-nil, zero value otherwise.

### GetReportGroupOk

`func (o *FolioReportType) GetReportGroupOk() (*FolioReportGroupType, bool)`

GetReportGroupOk returns a tuple with the ReportGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportGroup

`func (o *FolioReportType) SetReportGroup(v FolioReportGroupType)`

SetReportGroup sets ReportGroup field to given value.

### HasReportGroup

`func (o *FolioReportType) HasReportGroup() bool`

HasReportGroup returns a boolean if a field has been set.

### GetReportName

`func (o *FolioReportType) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *FolioReportType) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *FolioReportType) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *FolioReportType) HasReportName() bool`

HasReportName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


