# GamingOffers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GamingOffersInfo** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Offers that are availabl to be attached | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewGamingOffers

`func NewGamingOffers() *GamingOffers`

NewGamingOffers instantiates a new GamingOffers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGamingOffersWithDefaults

`func NewGamingOffersWithDefaults() *GamingOffers`

NewGamingOffersWithDefaults instantiates a new GamingOffers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGamingOffersInfo

`func (o *GamingOffers) GetGamingOffersInfo() []CodeDescriptionType`

GetGamingOffersInfo returns the GamingOffersInfo field if non-nil, zero value otherwise.

### GetGamingOffersInfoOk

`func (o *GamingOffers) GetGamingOffersInfoOk() (*[]CodeDescriptionType, bool)`

GetGamingOffersInfoOk returns a tuple with the GamingOffersInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGamingOffersInfo

`func (o *GamingOffers) SetGamingOffersInfo(v []CodeDescriptionType)`

SetGamingOffersInfo sets GamingOffersInfo field to given value.

### HasGamingOffersInfo

`func (o *GamingOffers) HasGamingOffersInfo() bool`

HasGamingOffersInfo returns a boolean if a field has been set.

### GetLinks

`func (o *GamingOffers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GamingOffers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GamingOffers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GamingOffers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


