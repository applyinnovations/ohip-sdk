# StatementDetailsStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelStatementDetails** | Pointer to [**StatementDetailsStatisticsType**](StatementDetailsStatisticsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStatementDetailsStatistics

`func NewStatementDetailsStatistics() *StatementDetailsStatistics`

NewStatementDetailsStatistics instantiates a new StatementDetailsStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatementDetailsStatisticsWithDefaults

`func NewStatementDetailsStatisticsWithDefaults() *StatementDetailsStatistics`

NewStatementDetailsStatisticsWithDefaults instantiates a new StatementDetailsStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelStatementDetails

`func (o *StatementDetailsStatistics) GetChannelStatementDetails() StatementDetailsStatisticsType`

GetChannelStatementDetails returns the ChannelStatementDetails field if non-nil, zero value otherwise.

### GetChannelStatementDetailsOk

`func (o *StatementDetailsStatistics) GetChannelStatementDetailsOk() (*StatementDetailsStatisticsType, bool)`

GetChannelStatementDetailsOk returns a tuple with the ChannelStatementDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelStatementDetails

`func (o *StatementDetailsStatistics) SetChannelStatementDetails(v StatementDetailsStatisticsType)`

SetChannelStatementDetails sets ChannelStatementDetails field to given value.

### HasChannelStatementDetails

`func (o *StatementDetailsStatistics) HasChannelStatementDetails() bool`

HasChannelStatementDetails returns a boolean if a field has been set.

### GetLinks

`func (o *StatementDetailsStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StatementDetailsStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StatementDetailsStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StatementDetailsStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StatementDetailsStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StatementDetailsStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StatementDetailsStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StatementDetailsStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


