# ProfileNegotiatedRateDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]GetChannelRatesAccessItems**](GetChannelRatesAccessItems.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileNegotiatedRateDetails

`func NewProfileNegotiatedRateDetails() *ProfileNegotiatedRateDetails`

NewProfileNegotiatedRateDetails instantiates a new ProfileNegotiatedRateDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileNegotiatedRateDetailsWithDefaults

`func NewProfileNegotiatedRateDetailsWithDefaults() *ProfileNegotiatedRateDetails`

NewProfileNegotiatedRateDetailsWithDefaults instantiates a new ProfileNegotiatedRateDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ProfileNegotiatedRateDetails) GetItems() []GetChannelRatesAccessItems`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ProfileNegotiatedRateDetails) GetItemsOk() (*[]GetChannelRatesAccessItems, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ProfileNegotiatedRateDetails) SetItems(v []GetChannelRatesAccessItems)`

SetItems sets Items field to given value.

### HasItems

`func (o *ProfileNegotiatedRateDetails) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileNegotiatedRateDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileNegotiatedRateDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileNegotiatedRateDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileNegotiatedRateDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileNegotiatedRateDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileNegotiatedRateDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileNegotiatedRateDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileNegotiatedRateDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


