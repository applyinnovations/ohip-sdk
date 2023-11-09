# Tickets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Tickets** | Pointer to [**TicketsType**](TicketsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTickets

`func NewTickets() *Tickets`

NewTickets instantiates a new Tickets object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketsWithDefaults

`func NewTicketsWithDefaults() *Tickets`

NewTicketsWithDefaults instantiates a new Tickets object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *Tickets) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Tickets) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Tickets) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Tickets) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTickets

`func (o *Tickets) GetTickets() TicketsType`

GetTickets returns the Tickets field if non-nil, zero value otherwise.

### GetTicketsOk

`func (o *Tickets) GetTicketsOk() (*TicketsType, bool)`

GetTicketsOk returns a tuple with the Tickets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickets

`func (o *Tickets) SetTickets(v TicketsType)`

SetTickets sets Tickets field to given value.

### HasTickets

`func (o *Tickets) HasTickets() bool`

HasTickets returns a boolean if a field has been set.

### GetWarnings

`func (o *Tickets) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Tickets) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Tickets) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Tickets) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


