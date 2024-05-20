# ARAccountTypeLastStatementInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateSent** | Pointer to **string** | The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type. | [optional] 
**HistoryExists** | Pointer to **bool** | Indicates that statement history exists. | [optional] 
**ReportFileName** | Pointer to **string** | Report file name when exists to allow report re-printing. | [optional] 
**ReportName** | Pointer to **string** | Report Name. | [optional] 
**StatementNo** | Pointer to **int32** | When using Statement Numbering, a unique number is associated to the Statement. | [optional] 

## Methods

### NewARAccountTypeLastStatementInfo

`func NewARAccountTypeLastStatementInfo() *ARAccountTypeLastStatementInfo`

NewARAccountTypeLastStatementInfo instantiates a new ARAccountTypeLastStatementInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountTypeLastStatementInfoWithDefaults

`func NewARAccountTypeLastStatementInfoWithDefaults() *ARAccountTypeLastStatementInfo`

NewARAccountTypeLastStatementInfoWithDefaults instantiates a new ARAccountTypeLastStatementInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateSent

`func (o *ARAccountTypeLastStatementInfo) GetDateSent() string`

GetDateSent returns the DateSent field if non-nil, zero value otherwise.

### GetDateSentOk

`func (o *ARAccountTypeLastStatementInfo) GetDateSentOk() (*string, bool)`

GetDateSentOk returns a tuple with the DateSent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateSent

`func (o *ARAccountTypeLastStatementInfo) SetDateSent(v string)`

SetDateSent sets DateSent field to given value.

### HasDateSent

`func (o *ARAccountTypeLastStatementInfo) HasDateSent() bool`

HasDateSent returns a boolean if a field has been set.

### GetHistoryExists

`func (o *ARAccountTypeLastStatementInfo) GetHistoryExists() bool`

GetHistoryExists returns the HistoryExists field if non-nil, zero value otherwise.

### GetHistoryExistsOk

`func (o *ARAccountTypeLastStatementInfo) GetHistoryExistsOk() (*bool, bool)`

GetHistoryExistsOk returns a tuple with the HistoryExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistoryExists

`func (o *ARAccountTypeLastStatementInfo) SetHistoryExists(v bool)`

SetHistoryExists sets HistoryExists field to given value.

### HasHistoryExists

`func (o *ARAccountTypeLastStatementInfo) HasHistoryExists() bool`

HasHistoryExists returns a boolean if a field has been set.

### GetReportFileName

`func (o *ARAccountTypeLastStatementInfo) GetReportFileName() string`

GetReportFileName returns the ReportFileName field if non-nil, zero value otherwise.

### GetReportFileNameOk

`func (o *ARAccountTypeLastStatementInfo) GetReportFileNameOk() (*string, bool)`

GetReportFileNameOk returns a tuple with the ReportFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportFileName

`func (o *ARAccountTypeLastStatementInfo) SetReportFileName(v string)`

SetReportFileName sets ReportFileName field to given value.

### HasReportFileName

`func (o *ARAccountTypeLastStatementInfo) HasReportFileName() bool`

HasReportFileName returns a boolean if a field has been set.

### GetReportName

`func (o *ARAccountTypeLastStatementInfo) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *ARAccountTypeLastStatementInfo) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *ARAccountTypeLastStatementInfo) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *ARAccountTypeLastStatementInfo) HasReportName() bool`

HasReportName returns a boolean if a field has been set.

### GetStatementNo

`func (o *ARAccountTypeLastStatementInfo) GetStatementNo() int32`

GetStatementNo returns the StatementNo field if non-nil, zero value otherwise.

### GetStatementNoOk

`func (o *ARAccountTypeLastStatementInfo) GetStatementNoOk() (*int32, bool)`

GetStatementNoOk returns a tuple with the StatementNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementNo

`func (o *ARAccountTypeLastStatementInfo) SetStatementNo(v int32)`

SetStatementNo sets StatementNo field to given value.

### HasStatementNo

`func (o *ARAccountTypeLastStatementInfo) HasStatementNo() bool`

HasStatementNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


