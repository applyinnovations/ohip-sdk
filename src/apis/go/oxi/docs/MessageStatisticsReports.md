# MessageStatisticsReports

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceDetails** | Pointer to [**InterfaceSetupIDType**](InterfaceSetupIDType.md) |  | [optional] 
**StatReports** | Pointer to [**[]ExchangeStatReportType**](ExchangeStatReportType.md) | Exchange Interface Report Type. | [optional] 

## Methods

### NewMessageStatisticsReports

`func NewMessageStatisticsReports() *MessageStatisticsReports`

NewMessageStatisticsReports instantiates a new MessageStatisticsReports object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMessageStatisticsReportsWithDefaults

`func NewMessageStatisticsReportsWithDefaults() *MessageStatisticsReports`

NewMessageStatisticsReportsWithDefaults instantiates a new MessageStatisticsReports object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceDetails

`func (o *MessageStatisticsReports) GetInterfaceDetails() InterfaceSetupIDType`

GetInterfaceDetails returns the InterfaceDetails field if non-nil, zero value otherwise.

### GetInterfaceDetailsOk

`func (o *MessageStatisticsReports) GetInterfaceDetailsOk() (*InterfaceSetupIDType, bool)`

GetInterfaceDetailsOk returns a tuple with the InterfaceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceDetails

`func (o *MessageStatisticsReports) SetInterfaceDetails(v InterfaceSetupIDType)`

SetInterfaceDetails sets InterfaceDetails field to given value.

### HasInterfaceDetails

`func (o *MessageStatisticsReports) HasInterfaceDetails() bool`

HasInterfaceDetails returns a boolean if a field has been set.

### GetStatReports

`func (o *MessageStatisticsReports) GetStatReports() []ExchangeStatReportType`

GetStatReports returns the StatReports field if non-nil, zero value otherwise.

### GetStatReportsOk

`func (o *MessageStatisticsReports) GetStatReportsOk() (*[]ExchangeStatReportType, bool)`

GetStatReportsOk returns a tuple with the StatReports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatReports

`func (o *MessageStatisticsReports) SetStatReports(v []ExchangeStatReportType)`

SetStatReports sets StatReports field to given value.

### HasStatReports

`func (o *MessageStatisticsReports) HasStatReports() bool`

HasStatReports returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


