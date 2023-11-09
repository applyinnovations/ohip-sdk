# ExportActivityLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLog** | Pointer to [**ActivityLogListType**](ActivityLogListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewExportActivityLog

`func NewExportActivityLog() *ExportActivityLog`

NewExportActivityLog instantiates a new ExportActivityLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportActivityLogWithDefaults

`func NewExportActivityLogWithDefaults() *ExportActivityLog`

NewExportActivityLogWithDefaults instantiates a new ExportActivityLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLog

`func (o *ExportActivityLog) GetActivityLog() ActivityLogListType`

GetActivityLog returns the ActivityLog field if non-nil, zero value otherwise.

### GetActivityLogOk

`func (o *ExportActivityLog) GetActivityLogOk() (*ActivityLogListType, bool)`

GetActivityLogOk returns a tuple with the ActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLog

`func (o *ExportActivityLog) SetActivityLog(v ActivityLogListType)`

SetActivityLog sets ActivityLog field to given value.

### HasActivityLog

`func (o *ExportActivityLog) HasActivityLog() bool`

HasActivityLog returns a boolean if a field has been set.

### GetLinks

`func (o *ExportActivityLog) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportActivityLog) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportActivityLog) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportActivityLog) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportActivityLog) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportActivityLog) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportActivityLog) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportActivityLog) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


