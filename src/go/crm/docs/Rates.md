# Rates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Rate** | Pointer to [**MembershipTransactionRatesType**](MembershipTransactionRatesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRates

`func NewRates() *Rates`

NewRates instantiates a new Rates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatesWithDefaults

`func NewRatesWithDefaults() *Rates`

NewRatesWithDefaults instantiates a new Rates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *Rates) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Rates) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Rates) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Rates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRate

`func (o *Rates) GetRate() MembershipTransactionRatesType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *Rates) GetRateOk() (*MembershipTransactionRatesType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *Rates) SetRate(v MembershipTransactionRatesType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *Rates) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetWarnings

`func (o *Rates) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Rates) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Rates) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Rates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


