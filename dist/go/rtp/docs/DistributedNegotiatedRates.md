# DistributedNegotiatedRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCodeList** | Pointer to **[]string** | Hotel code. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NegotiatedRateList** | Pointer to [**[]NegotiatedRateType**](NegotiatedRateType.md) | List of Negotiated rates to be maintained. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDistributedNegotiatedRates

`func NewDistributedNegotiatedRates() *DistributedNegotiatedRates`

NewDistributedNegotiatedRates instantiates a new DistributedNegotiatedRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributedNegotiatedRatesWithDefaults

`func NewDistributedNegotiatedRatesWithDefaults() *DistributedNegotiatedRates`

NewDistributedNegotiatedRatesWithDefaults instantiates a new DistributedNegotiatedRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCodeList

`func (o *DistributedNegotiatedRates) GetHotelCodeList() []string`

GetHotelCodeList returns the HotelCodeList field if non-nil, zero value otherwise.

### GetHotelCodeListOk

`func (o *DistributedNegotiatedRates) GetHotelCodeListOk() (*[]string, bool)`

GetHotelCodeListOk returns a tuple with the HotelCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeList

`func (o *DistributedNegotiatedRates) SetHotelCodeList(v []string)`

SetHotelCodeList sets HotelCodeList field to given value.

### HasHotelCodeList

`func (o *DistributedNegotiatedRates) HasHotelCodeList() bool`

HasHotelCodeList returns a boolean if a field has been set.

### GetLinks

`func (o *DistributedNegotiatedRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DistributedNegotiatedRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DistributedNegotiatedRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DistributedNegotiatedRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNegotiatedRateList

`func (o *DistributedNegotiatedRates) GetNegotiatedRateList() []NegotiatedRateType`

GetNegotiatedRateList returns the NegotiatedRateList field if non-nil, zero value otherwise.

### GetNegotiatedRateListOk

`func (o *DistributedNegotiatedRates) GetNegotiatedRateListOk() (*[]NegotiatedRateType, bool)`

GetNegotiatedRateListOk returns a tuple with the NegotiatedRateList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRateList

`func (o *DistributedNegotiatedRates) SetNegotiatedRateList(v []NegotiatedRateType)`

SetNegotiatedRateList sets NegotiatedRateList field to given value.

### HasNegotiatedRateList

`func (o *DistributedNegotiatedRates) HasNegotiatedRateList() bool`

HasNegotiatedRateList returns a boolean if a field has been set.

### GetWarnings

`func (o *DistributedNegotiatedRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DistributedNegotiatedRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DistributedNegotiatedRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DistributedNegotiatedRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


