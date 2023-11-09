# PostAutoCheckoutReservationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CheckoutReservationType**](CheckoutReservationType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAutoCheckoutReservationsRequest

`func NewPostAutoCheckoutReservationsRequest() *PostAutoCheckoutReservationsRequest`

NewPostAutoCheckoutReservationsRequest instantiates a new PostAutoCheckoutReservationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAutoCheckoutReservationsRequestWithDefaults

`func NewPostAutoCheckoutReservationsRequestWithDefaults() *PostAutoCheckoutReservationsRequest`

NewPostAutoCheckoutReservationsRequestWithDefaults instantiates a new PostAutoCheckoutReservationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostAutoCheckoutReservationsRequest) GetCriteria() CheckoutReservationType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostAutoCheckoutReservationsRequest) GetCriteriaOk() (*CheckoutReservationType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostAutoCheckoutReservationsRequest) SetCriteria(v CheckoutReservationType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostAutoCheckoutReservationsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostAutoCheckoutReservationsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAutoCheckoutReservationsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAutoCheckoutReservationsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAutoCheckoutReservationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAutoCheckoutReservationsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAutoCheckoutReservationsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAutoCheckoutReservationsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAutoCheckoutReservationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


