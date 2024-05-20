# FulfillmentExportedLogs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FulfillmentExportLogs** | Pointer to [**[]FulfillmentExportInfoType**](FulfillmentExportInfoType.md) | This type holds the export log information for the membership fulfillment record. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFulfillmentExportedLogs

`func NewFulfillmentExportedLogs() *FulfillmentExportedLogs`

NewFulfillmentExportedLogs instantiates a new FulfillmentExportedLogs object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFulfillmentExportedLogsWithDefaults

`func NewFulfillmentExportedLogsWithDefaults() *FulfillmentExportedLogs`

NewFulfillmentExportedLogsWithDefaults instantiates a new FulfillmentExportedLogs object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFulfillmentExportLogs

`func (o *FulfillmentExportedLogs) GetFulfillmentExportLogs() []FulfillmentExportInfoType`

GetFulfillmentExportLogs returns the FulfillmentExportLogs field if non-nil, zero value otherwise.

### GetFulfillmentExportLogsOk

`func (o *FulfillmentExportedLogs) GetFulfillmentExportLogsOk() (*[]FulfillmentExportInfoType, bool)`

GetFulfillmentExportLogsOk returns a tuple with the FulfillmentExportLogs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFulfillmentExportLogs

`func (o *FulfillmentExportedLogs) SetFulfillmentExportLogs(v []FulfillmentExportInfoType)`

SetFulfillmentExportLogs sets FulfillmentExportLogs field to given value.

### HasFulfillmentExportLogs

`func (o *FulfillmentExportedLogs) HasFulfillmentExportLogs() bool`

HasFulfillmentExportLogs returns a boolean if a field has been set.

### GetLinks

`func (o *FulfillmentExportedLogs) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FulfillmentExportedLogs) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FulfillmentExportedLogs) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FulfillmentExportedLogs) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FulfillmentExportedLogs) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FulfillmentExportedLogs) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FulfillmentExportedLogs) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FulfillmentExportedLogs) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


