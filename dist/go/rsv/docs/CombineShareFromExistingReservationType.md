# CombineShareFromExistingReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RouteAllTransactionsToShareReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**DailyRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 

## Methods

### NewCombineShareFromExistingReservationType

`func NewCombineShareFromExistingReservationType() *CombineShareFromExistingReservationType`

NewCombineShareFromExistingReservationType instantiates a new CombineShareFromExistingReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareFromExistingReservationTypeWithDefaults

`func NewCombineShareFromExistingReservationTypeWithDefaults() *CombineShareFromExistingReservationType`

NewCombineShareFromExistingReservationTypeWithDefaults instantiates a new CombineShareFromExistingReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRouteAllTransactionsToShareReservationId

`func (o *CombineShareFromExistingReservationType) GetRouteAllTransactionsToShareReservationId() UniqueIDType`

GetRouteAllTransactionsToShareReservationId returns the RouteAllTransactionsToShareReservationId field if non-nil, zero value otherwise.

### GetRouteAllTransactionsToShareReservationIdOk

`func (o *CombineShareFromExistingReservationType) GetRouteAllTransactionsToShareReservationIdOk() (*UniqueIDType, bool)`

GetRouteAllTransactionsToShareReservationIdOk returns a tuple with the RouteAllTransactionsToShareReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRouteAllTransactionsToShareReservationId

`func (o *CombineShareFromExistingReservationType) SetRouteAllTransactionsToShareReservationId(v UniqueIDType)`

SetRouteAllTransactionsToShareReservationId sets RouteAllTransactionsToShareReservationId field to given value.

### HasRouteAllTransactionsToShareReservationId

`func (o *CombineShareFromExistingReservationType) HasRouteAllTransactionsToShareReservationId() bool`

HasRouteAllTransactionsToShareReservationId returns a boolean if a field has been set.

### GetDailyRates

`func (o *CombineShareFromExistingReservationType) GetDailyRates() []DailyRateType`

GetDailyRates returns the DailyRates field if non-nil, zero value otherwise.

### GetDailyRatesOk

`func (o *CombineShareFromExistingReservationType) GetDailyRatesOk() (*[]DailyRateType, bool)`

GetDailyRatesOk returns a tuple with the DailyRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyRates

`func (o *CombineShareFromExistingReservationType) SetDailyRates(v []DailyRateType)`

SetDailyRates sets DailyRates field to given value.

### HasDailyRates

`func (o *CombineShareFromExistingReservationType) HasDailyRates() bool`

HasDailyRates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


