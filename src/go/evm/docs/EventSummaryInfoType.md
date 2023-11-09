# EventSummaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllPosted** | Pointer to **bool** | Indicates whether the event has posted all charges. | [optional] 
**AlternateEvent** | Pointer to **bool** | Flag to indicate if the event is booked as a backup for another event. | [optional] 
**Attendees** | Pointer to **int32** | Number of event attendees. | [optional] 
**BlockHasPostings** | Pointer to **bool** | Indicates whether any event in the block has postings. | [optional] 
**BlockHotelCode** | Pointer to **string** | Hotel where the Block is created for the event. | [optional] 
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**CateringCurrency** | Pointer to **string** | Currency code when base currency of the property is different than the catering currency. | [optional] 
**CateringQuotedCurrency** | Pointer to **string** | Currency code which is been quoted for Catering Events | [optional] 
**CateringStatusDeductInventory** | Pointer to **bool** | Flag to indicate if the Catering event deducts resources from inventory. | [optional] 
**CateringStatusReturnToInventory** | Pointer to **bool** | Flag to indicate if the Catering event returns resources to inventory. | [optional] 
**CateringStatusType** | Pointer to [**CateringStatusTypeType**](CateringStatusTypeType.md) |  | [optional] 
**DiscountPercentage** | Pointer to **float32** | Discount Percentage applied to Rent Amount. | [optional] 
**DisplayDoorCard** | Pointer to **bool** | Flag to indicate if the doorcard has been selected to display on reports or external readerboard systems. | [optional] 
**DoorCard** | Pointer to **string** | The doorcard to be displayed on reports or external readerboard systems. | [optional] 
**EventEndDate** | Pointer to **string** | The ending value of the time span. | [optional] 
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**EventIndicators** | Pointer to [**IndicatorsType**](IndicatorsType.md) |  | [optional] 
**EventLink** | Pointer to [**CateringEventLinkType**](CateringEventLinkType.md) |  | [optional] 
**EventName** | Pointer to **string** | Name of event. This is used to describe the event. | [optional] 
**EventShared** | Pointer to **bool** | Flag to indicate if the event is shareable with other events. | [optional] 
**EventStartDate** | Pointer to **string** | The starting value of the time span. | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**ExcludeFromForecast** | Pointer to **bool** | Flag to indicate if the event revenue should be excluded from the forecast. | [optional] 
**FunctionSpaceDetails** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**FunctionSpaceSetup** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**HasPartialPostings** | Pointer to **bool** | Indicates whether the event has posted some charges, but not all. | [optional] 
**HasPostings** | Pointer to **bool** | Indicates whether the event has postings. | [optional] 
**HotelId** | Pointer to **string** | Hotel where the event is booked. | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the event. | [optional] 
**IncludeSpaceInPackage** | Pointer to **bool** | Flag to indicate if the event space is associated from the Package. | [optional] 
**Indicators** | Pointer to [**IndicatorsType**](IndicatorsType.md) |  | [optional] 
**LoudEvent** | Pointer to **bool** | Indicates whether the event is expected to be noisy and might possibly disturb other events. | [optional] 
**MasterEvent** | Pointer to **bool** | Flag to indicate if the event is a master event. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Maximum Occupancy for the SetupCode of Catring Event. | [optional] 
**MinimumOccupancy** | Pointer to **int32** | Minimum Occupancy for the SetupCode of Catring Event. | [optional] 
**NothingPosted** | Pointer to **bool** | Indicates that none of the charges on the event have been posted. | [optional] 
**PackageCode** | Pointer to **string** | Package Code of the Event if it has a Package Enabled in it. | [optional] 
**PackageEvent** | Pointer to **bool** | Flag to indicate if the event is part of a package. | [optional] 
**PackageId** | Pointer to **int32** | Package Id of the Event. | [optional] 
**PackageName** | Pointer to **string** | Package Name of the Event. | [optional] 
**RentalAmount** | Pointer to **float32** | Rental amount for the event function space. | [optional] 
**RentalCode** | Pointer to **string** | Rate Code for function space. | [optional] 
**SetupCode** | Pointer to **string** | Setup style code. | [optional] 
**SetupTime** | Pointer to **int32** | Event space setupCode time in minutes. | [optional] 
**Shareable** | Pointer to **bool** | Flag to indicate if the event functionSpaceDetails is shareable. | [optional] 
**SubEvent** | Pointer to **bool** | Flag to indicate if the event is a sub event. | [optional] 
**TearDownTime** | Pointer to **int32** | Event space tear down time in minutes. | [optional] 
**Type** | Pointer to **string** | Type of event. Examples are LUN, DIN, etc. | [optional] 
**UseForecastRevenue** | Pointer to **bool** | Flag to indicate whether to only use the forecasted values when reporting, regardless of whether resources are booked on an event. | [optional] 
**WaitlistReturnStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 

## Methods

### NewEventSummaryInfoType

`func NewEventSummaryInfoType() *EventSummaryInfoType`

NewEventSummaryInfoType instantiates a new EventSummaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventSummaryInfoTypeWithDefaults

`func NewEventSummaryInfoTypeWithDefaults() *EventSummaryInfoType`

NewEventSummaryInfoTypeWithDefaults instantiates a new EventSummaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllPosted

`func (o *EventSummaryInfoType) GetAllPosted() bool`

GetAllPosted returns the AllPosted field if non-nil, zero value otherwise.

### GetAllPostedOk

`func (o *EventSummaryInfoType) GetAllPostedOk() (*bool, bool)`

GetAllPostedOk returns a tuple with the AllPosted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllPosted

`func (o *EventSummaryInfoType) SetAllPosted(v bool)`

SetAllPosted sets AllPosted field to given value.

### HasAllPosted

`func (o *EventSummaryInfoType) HasAllPosted() bool`

HasAllPosted returns a boolean if a field has been set.

### GetAlternateEvent

`func (o *EventSummaryInfoType) GetAlternateEvent() bool`

GetAlternateEvent returns the AlternateEvent field if non-nil, zero value otherwise.

### GetAlternateEventOk

`func (o *EventSummaryInfoType) GetAlternateEventOk() (*bool, bool)`

GetAlternateEventOk returns a tuple with the AlternateEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateEvent

`func (o *EventSummaryInfoType) SetAlternateEvent(v bool)`

SetAlternateEvent sets AlternateEvent field to given value.

### HasAlternateEvent

`func (o *EventSummaryInfoType) HasAlternateEvent() bool`

HasAlternateEvent returns a boolean if a field has been set.

### GetAttendees

`func (o *EventSummaryInfoType) GetAttendees() int32`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *EventSummaryInfoType) GetAttendeesOk() (*int32, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *EventSummaryInfoType) SetAttendees(v int32)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *EventSummaryInfoType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetBlockHasPostings

`func (o *EventSummaryInfoType) GetBlockHasPostings() bool`

GetBlockHasPostings returns the BlockHasPostings field if non-nil, zero value otherwise.

### GetBlockHasPostingsOk

`func (o *EventSummaryInfoType) GetBlockHasPostingsOk() (*bool, bool)`

GetBlockHasPostingsOk returns a tuple with the BlockHasPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockHasPostings

`func (o *EventSummaryInfoType) SetBlockHasPostings(v bool)`

SetBlockHasPostings sets BlockHasPostings field to given value.

### HasBlockHasPostings

`func (o *EventSummaryInfoType) HasBlockHasPostings() bool`

HasBlockHasPostings returns a boolean if a field has been set.

### GetBlockHotelCode

`func (o *EventSummaryInfoType) GetBlockHotelCode() string`

GetBlockHotelCode returns the BlockHotelCode field if non-nil, zero value otherwise.

### GetBlockHotelCodeOk

`func (o *EventSummaryInfoType) GetBlockHotelCodeOk() (*string, bool)`

GetBlockHotelCodeOk returns a tuple with the BlockHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockHotelCode

`func (o *EventSummaryInfoType) SetBlockHotelCode(v string)`

SetBlockHotelCode sets BlockHotelCode field to given value.

### HasBlockHotelCode

`func (o *EventSummaryInfoType) HasBlockHotelCode() bool`

HasBlockHotelCode returns a boolean if a field has been set.

### GetBlockIdList

`func (o *EventSummaryInfoType) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *EventSummaryInfoType) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *EventSummaryInfoType) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *EventSummaryInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockName

`func (o *EventSummaryInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *EventSummaryInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *EventSummaryInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *EventSummaryInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetCateringCurrency

`func (o *EventSummaryInfoType) GetCateringCurrency() string`

GetCateringCurrency returns the CateringCurrency field if non-nil, zero value otherwise.

### GetCateringCurrencyOk

`func (o *EventSummaryInfoType) GetCateringCurrencyOk() (*string, bool)`

GetCateringCurrencyOk returns a tuple with the CateringCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringCurrency

`func (o *EventSummaryInfoType) SetCateringCurrency(v string)`

SetCateringCurrency sets CateringCurrency field to given value.

### HasCateringCurrency

`func (o *EventSummaryInfoType) HasCateringCurrency() bool`

HasCateringCurrency returns a boolean if a field has been set.

### GetCateringQuotedCurrency

`func (o *EventSummaryInfoType) GetCateringQuotedCurrency() string`

GetCateringQuotedCurrency returns the CateringQuotedCurrency field if non-nil, zero value otherwise.

### GetCateringQuotedCurrencyOk

`func (o *EventSummaryInfoType) GetCateringQuotedCurrencyOk() (*string, bool)`

GetCateringQuotedCurrencyOk returns a tuple with the CateringQuotedCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringQuotedCurrency

`func (o *EventSummaryInfoType) SetCateringQuotedCurrency(v string)`

SetCateringQuotedCurrency sets CateringQuotedCurrency field to given value.

### HasCateringQuotedCurrency

`func (o *EventSummaryInfoType) HasCateringQuotedCurrency() bool`

HasCateringQuotedCurrency returns a boolean if a field has been set.

### GetCateringStatusDeductInventory

`func (o *EventSummaryInfoType) GetCateringStatusDeductInventory() bool`

GetCateringStatusDeductInventory returns the CateringStatusDeductInventory field if non-nil, zero value otherwise.

### GetCateringStatusDeductInventoryOk

`func (o *EventSummaryInfoType) GetCateringStatusDeductInventoryOk() (*bool, bool)`

GetCateringStatusDeductInventoryOk returns a tuple with the CateringStatusDeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusDeductInventory

`func (o *EventSummaryInfoType) SetCateringStatusDeductInventory(v bool)`

SetCateringStatusDeductInventory sets CateringStatusDeductInventory field to given value.

### HasCateringStatusDeductInventory

`func (o *EventSummaryInfoType) HasCateringStatusDeductInventory() bool`

HasCateringStatusDeductInventory returns a boolean if a field has been set.

### GetCateringStatusReturnToInventory

`func (o *EventSummaryInfoType) GetCateringStatusReturnToInventory() bool`

GetCateringStatusReturnToInventory returns the CateringStatusReturnToInventory field if non-nil, zero value otherwise.

### GetCateringStatusReturnToInventoryOk

`func (o *EventSummaryInfoType) GetCateringStatusReturnToInventoryOk() (*bool, bool)`

GetCateringStatusReturnToInventoryOk returns a tuple with the CateringStatusReturnToInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusReturnToInventory

`func (o *EventSummaryInfoType) SetCateringStatusReturnToInventory(v bool)`

SetCateringStatusReturnToInventory sets CateringStatusReturnToInventory field to given value.

### HasCateringStatusReturnToInventory

`func (o *EventSummaryInfoType) HasCateringStatusReturnToInventory() bool`

HasCateringStatusReturnToInventory returns a boolean if a field has been set.

### GetCateringStatusType

`func (o *EventSummaryInfoType) GetCateringStatusType() CateringStatusTypeType`

GetCateringStatusType returns the CateringStatusType field if non-nil, zero value otherwise.

### GetCateringStatusTypeOk

`func (o *EventSummaryInfoType) GetCateringStatusTypeOk() (*CateringStatusTypeType, bool)`

GetCateringStatusTypeOk returns a tuple with the CateringStatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusType

`func (o *EventSummaryInfoType) SetCateringStatusType(v CateringStatusTypeType)`

SetCateringStatusType sets CateringStatusType field to given value.

### HasCateringStatusType

`func (o *EventSummaryInfoType) HasCateringStatusType() bool`

HasCateringStatusType returns a boolean if a field has been set.

### GetDiscountPercentage

`func (o *EventSummaryInfoType) GetDiscountPercentage() float32`

GetDiscountPercentage returns the DiscountPercentage field if non-nil, zero value otherwise.

### GetDiscountPercentageOk

`func (o *EventSummaryInfoType) GetDiscountPercentageOk() (*float32, bool)`

GetDiscountPercentageOk returns a tuple with the DiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountPercentage

`func (o *EventSummaryInfoType) SetDiscountPercentage(v float32)`

SetDiscountPercentage sets DiscountPercentage field to given value.

### HasDiscountPercentage

`func (o *EventSummaryInfoType) HasDiscountPercentage() bool`

HasDiscountPercentage returns a boolean if a field has been set.

### GetDisplayDoorCard

`func (o *EventSummaryInfoType) GetDisplayDoorCard() bool`

GetDisplayDoorCard returns the DisplayDoorCard field if non-nil, zero value otherwise.

### GetDisplayDoorCardOk

`func (o *EventSummaryInfoType) GetDisplayDoorCardOk() (*bool, bool)`

GetDisplayDoorCardOk returns a tuple with the DisplayDoorCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayDoorCard

`func (o *EventSummaryInfoType) SetDisplayDoorCard(v bool)`

SetDisplayDoorCard sets DisplayDoorCard field to given value.

### HasDisplayDoorCard

`func (o *EventSummaryInfoType) HasDisplayDoorCard() bool`

HasDisplayDoorCard returns a boolean if a field has been set.

### GetDoorCard

`func (o *EventSummaryInfoType) GetDoorCard() string`

GetDoorCard returns the DoorCard field if non-nil, zero value otherwise.

### GetDoorCardOk

`func (o *EventSummaryInfoType) GetDoorCardOk() (*string, bool)`

GetDoorCardOk returns a tuple with the DoorCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoorCard

`func (o *EventSummaryInfoType) SetDoorCard(v string)`

SetDoorCard sets DoorCard field to given value.

### HasDoorCard

`func (o *EventSummaryInfoType) HasDoorCard() bool`

HasDoorCard returns a boolean if a field has been set.

### GetEventEndDate

`func (o *EventSummaryInfoType) GetEventEndDate() string`

GetEventEndDate returns the EventEndDate field if non-nil, zero value otherwise.

### GetEventEndDateOk

`func (o *EventSummaryInfoType) GetEventEndDateOk() (*string, bool)`

GetEventEndDateOk returns a tuple with the EventEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndDate

`func (o *EventSummaryInfoType) SetEventEndDate(v string)`

SetEventEndDate sets EventEndDate field to given value.

### HasEventEndDate

`func (o *EventSummaryInfoType) HasEventEndDate() bool`

HasEventEndDate returns a boolean if a field has been set.

### GetEventId

`func (o *EventSummaryInfoType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *EventSummaryInfoType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *EventSummaryInfoType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *EventSummaryInfoType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetEventIndicators

`func (o *EventSummaryInfoType) GetEventIndicators() IndicatorsType`

GetEventIndicators returns the EventIndicators field if non-nil, zero value otherwise.

### GetEventIndicatorsOk

`func (o *EventSummaryInfoType) GetEventIndicatorsOk() (*IndicatorsType, bool)`

GetEventIndicatorsOk returns a tuple with the EventIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventIndicators

`func (o *EventSummaryInfoType) SetEventIndicators(v IndicatorsType)`

SetEventIndicators sets EventIndicators field to given value.

### HasEventIndicators

`func (o *EventSummaryInfoType) HasEventIndicators() bool`

HasEventIndicators returns a boolean if a field has been set.

### GetEventLink

`func (o *EventSummaryInfoType) GetEventLink() CateringEventLinkType`

GetEventLink returns the EventLink field if non-nil, zero value otherwise.

### GetEventLinkOk

`func (o *EventSummaryInfoType) GetEventLinkOk() (*CateringEventLinkType, bool)`

GetEventLinkOk returns a tuple with the EventLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventLink

`func (o *EventSummaryInfoType) SetEventLink(v CateringEventLinkType)`

SetEventLink sets EventLink field to given value.

### HasEventLink

`func (o *EventSummaryInfoType) HasEventLink() bool`

HasEventLink returns a boolean if a field has been set.

### GetEventName

`func (o *EventSummaryInfoType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *EventSummaryInfoType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *EventSummaryInfoType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *EventSummaryInfoType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventShared

`func (o *EventSummaryInfoType) GetEventShared() bool`

GetEventShared returns the EventShared field if non-nil, zero value otherwise.

### GetEventSharedOk

`func (o *EventSummaryInfoType) GetEventSharedOk() (*bool, bool)`

GetEventSharedOk returns a tuple with the EventShared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventShared

`func (o *EventSummaryInfoType) SetEventShared(v bool)`

SetEventShared sets EventShared field to given value.

### HasEventShared

`func (o *EventSummaryInfoType) HasEventShared() bool`

HasEventShared returns a boolean if a field has been set.

### GetEventStartDate

`func (o *EventSummaryInfoType) GetEventStartDate() string`

GetEventStartDate returns the EventStartDate field if non-nil, zero value otherwise.

### GetEventStartDateOk

`func (o *EventSummaryInfoType) GetEventStartDateOk() (*string, bool)`

GetEventStartDateOk returns a tuple with the EventStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartDate

`func (o *EventSummaryInfoType) SetEventStartDate(v string)`

SetEventStartDate sets EventStartDate field to given value.

### HasEventStartDate

`func (o *EventSummaryInfoType) HasEventStartDate() bool`

HasEventStartDate returns a boolean if a field has been set.

### GetEventStatus

`func (o *EventSummaryInfoType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *EventSummaryInfoType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *EventSummaryInfoType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *EventSummaryInfoType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetExcludeFromForecast

`func (o *EventSummaryInfoType) GetExcludeFromForecast() bool`

GetExcludeFromForecast returns the ExcludeFromForecast field if non-nil, zero value otherwise.

### GetExcludeFromForecastOk

`func (o *EventSummaryInfoType) GetExcludeFromForecastOk() (*bool, bool)`

GetExcludeFromForecastOk returns a tuple with the ExcludeFromForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromForecast

`func (o *EventSummaryInfoType) SetExcludeFromForecast(v bool)`

SetExcludeFromForecast sets ExcludeFromForecast field to given value.

### HasExcludeFromForecast

`func (o *EventSummaryInfoType) HasExcludeFromForecast() bool`

HasExcludeFromForecast returns a boolean if a field has been set.

### GetFunctionSpaceDetails

`func (o *EventSummaryInfoType) GetFunctionSpaceDetails() CodeDescriptionType`

GetFunctionSpaceDetails returns the FunctionSpaceDetails field if non-nil, zero value otherwise.

### GetFunctionSpaceDetailsOk

`func (o *EventSummaryInfoType) GetFunctionSpaceDetailsOk() (*CodeDescriptionType, bool)`

GetFunctionSpaceDetailsOk returns a tuple with the FunctionSpaceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceDetails

`func (o *EventSummaryInfoType) SetFunctionSpaceDetails(v CodeDescriptionType)`

SetFunctionSpaceDetails sets FunctionSpaceDetails field to given value.

### HasFunctionSpaceDetails

`func (o *EventSummaryInfoType) HasFunctionSpaceDetails() bool`

HasFunctionSpaceDetails returns a boolean if a field has been set.

### GetFunctionSpaceSetup

`func (o *EventSummaryInfoType) GetFunctionSpaceSetup() CodeDescriptionType`

GetFunctionSpaceSetup returns the FunctionSpaceSetup field if non-nil, zero value otherwise.

### GetFunctionSpaceSetupOk

`func (o *EventSummaryInfoType) GetFunctionSpaceSetupOk() (*CodeDescriptionType, bool)`

GetFunctionSpaceSetupOk returns a tuple with the FunctionSpaceSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceSetup

`func (o *EventSummaryInfoType) SetFunctionSpaceSetup(v CodeDescriptionType)`

SetFunctionSpaceSetup sets FunctionSpaceSetup field to given value.

### HasFunctionSpaceSetup

`func (o *EventSummaryInfoType) HasFunctionSpaceSetup() bool`

HasFunctionSpaceSetup returns a boolean if a field has been set.

### GetHasPartialPostings

`func (o *EventSummaryInfoType) GetHasPartialPostings() bool`

GetHasPartialPostings returns the HasPartialPostings field if non-nil, zero value otherwise.

### GetHasPartialPostingsOk

`func (o *EventSummaryInfoType) GetHasPartialPostingsOk() (*bool, bool)`

GetHasPartialPostingsOk returns a tuple with the HasPartialPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPartialPostings

`func (o *EventSummaryInfoType) SetHasPartialPostings(v bool)`

SetHasPartialPostings sets HasPartialPostings field to given value.

### HasHasPartialPostings

`func (o *EventSummaryInfoType) HasHasPartialPostings() bool`

HasHasPartialPostings returns a boolean if a field has been set.

### GetHasPostings

`func (o *EventSummaryInfoType) GetHasPostings() bool`

GetHasPostings returns the HasPostings field if non-nil, zero value otherwise.

### GetHasPostingsOk

`func (o *EventSummaryInfoType) GetHasPostingsOk() (*bool, bool)`

GetHasPostingsOk returns a tuple with the HasPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPostings

`func (o *EventSummaryInfoType) SetHasPostings(v bool)`

SetHasPostings sets HasPostings field to given value.

### HasHasPostings

`func (o *EventSummaryInfoType) HasHasPostings() bool`

HasHasPostings returns a boolean if a field has been set.

### GetHotelId

`func (o *EventSummaryInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventSummaryInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventSummaryInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventSummaryInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactiveDate

`func (o *EventSummaryInfoType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *EventSummaryInfoType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *EventSummaryInfoType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *EventSummaryInfoType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetIncludeSpaceInPackage

`func (o *EventSummaryInfoType) GetIncludeSpaceInPackage() bool`

GetIncludeSpaceInPackage returns the IncludeSpaceInPackage field if non-nil, zero value otherwise.

### GetIncludeSpaceInPackageOk

`func (o *EventSummaryInfoType) GetIncludeSpaceInPackageOk() (*bool, bool)`

GetIncludeSpaceInPackageOk returns a tuple with the IncludeSpaceInPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeSpaceInPackage

`func (o *EventSummaryInfoType) SetIncludeSpaceInPackage(v bool)`

SetIncludeSpaceInPackage sets IncludeSpaceInPackage field to given value.

### HasIncludeSpaceInPackage

`func (o *EventSummaryInfoType) HasIncludeSpaceInPackage() bool`

HasIncludeSpaceInPackage returns a boolean if a field has been set.

### GetIndicators

`func (o *EventSummaryInfoType) GetIndicators() IndicatorsType`

GetIndicators returns the Indicators field if non-nil, zero value otherwise.

### GetIndicatorsOk

`func (o *EventSummaryInfoType) GetIndicatorsOk() (*IndicatorsType, bool)`

GetIndicatorsOk returns a tuple with the Indicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndicators

`func (o *EventSummaryInfoType) SetIndicators(v IndicatorsType)`

SetIndicators sets Indicators field to given value.

### HasIndicators

`func (o *EventSummaryInfoType) HasIndicators() bool`

HasIndicators returns a boolean if a field has been set.

### GetLoudEvent

`func (o *EventSummaryInfoType) GetLoudEvent() bool`

GetLoudEvent returns the LoudEvent field if non-nil, zero value otherwise.

### GetLoudEventOk

`func (o *EventSummaryInfoType) GetLoudEventOk() (*bool, bool)`

GetLoudEventOk returns a tuple with the LoudEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoudEvent

`func (o *EventSummaryInfoType) SetLoudEvent(v bool)`

SetLoudEvent sets LoudEvent field to given value.

### HasLoudEvent

`func (o *EventSummaryInfoType) HasLoudEvent() bool`

HasLoudEvent returns a boolean if a field has been set.

### GetMasterEvent

`func (o *EventSummaryInfoType) GetMasterEvent() bool`

GetMasterEvent returns the MasterEvent field if non-nil, zero value otherwise.

### GetMasterEventOk

`func (o *EventSummaryInfoType) GetMasterEventOk() (*bool, bool)`

GetMasterEventOk returns a tuple with the MasterEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEvent

`func (o *EventSummaryInfoType) SetMasterEvent(v bool)`

SetMasterEvent sets MasterEvent field to given value.

### HasMasterEvent

`func (o *EventSummaryInfoType) HasMasterEvent() bool`

HasMasterEvent returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *EventSummaryInfoType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *EventSummaryInfoType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *EventSummaryInfoType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *EventSummaryInfoType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetMinimumOccupancy

`func (o *EventSummaryInfoType) GetMinimumOccupancy() int32`

GetMinimumOccupancy returns the MinimumOccupancy field if non-nil, zero value otherwise.

### GetMinimumOccupancyOk

`func (o *EventSummaryInfoType) GetMinimumOccupancyOk() (*int32, bool)`

GetMinimumOccupancyOk returns a tuple with the MinimumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOccupancy

`func (o *EventSummaryInfoType) SetMinimumOccupancy(v int32)`

SetMinimumOccupancy sets MinimumOccupancy field to given value.

### HasMinimumOccupancy

`func (o *EventSummaryInfoType) HasMinimumOccupancy() bool`

HasMinimumOccupancy returns a boolean if a field has been set.

### GetNothingPosted

`func (o *EventSummaryInfoType) GetNothingPosted() bool`

GetNothingPosted returns the NothingPosted field if non-nil, zero value otherwise.

### GetNothingPostedOk

`func (o *EventSummaryInfoType) GetNothingPostedOk() (*bool, bool)`

GetNothingPostedOk returns a tuple with the NothingPosted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNothingPosted

`func (o *EventSummaryInfoType) SetNothingPosted(v bool)`

SetNothingPosted sets NothingPosted field to given value.

### HasNothingPosted

`func (o *EventSummaryInfoType) HasNothingPosted() bool`

HasNothingPosted returns a boolean if a field has been set.

### GetPackageCode

`func (o *EventSummaryInfoType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *EventSummaryInfoType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *EventSummaryInfoType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *EventSummaryInfoType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetPackageEvent

`func (o *EventSummaryInfoType) GetPackageEvent() bool`

GetPackageEvent returns the PackageEvent field if non-nil, zero value otherwise.

### GetPackageEventOk

`func (o *EventSummaryInfoType) GetPackageEventOk() (*bool, bool)`

GetPackageEventOk returns a tuple with the PackageEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageEvent

`func (o *EventSummaryInfoType) SetPackageEvent(v bool)`

SetPackageEvent sets PackageEvent field to given value.

### HasPackageEvent

`func (o *EventSummaryInfoType) HasPackageEvent() bool`

HasPackageEvent returns a boolean if a field has been set.

### GetPackageId

`func (o *EventSummaryInfoType) GetPackageId() int32`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *EventSummaryInfoType) GetPackageIdOk() (*int32, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *EventSummaryInfoType) SetPackageId(v int32)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *EventSummaryInfoType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetPackageName

`func (o *EventSummaryInfoType) GetPackageName() string`

GetPackageName returns the PackageName field if non-nil, zero value otherwise.

### GetPackageNameOk

`func (o *EventSummaryInfoType) GetPackageNameOk() (*string, bool)`

GetPackageNameOk returns a tuple with the PackageName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageName

`func (o *EventSummaryInfoType) SetPackageName(v string)`

SetPackageName sets PackageName field to given value.

### HasPackageName

`func (o *EventSummaryInfoType) HasPackageName() bool`

HasPackageName returns a boolean if a field has been set.

### GetRentalAmount

`func (o *EventSummaryInfoType) GetRentalAmount() float32`

GetRentalAmount returns the RentalAmount field if non-nil, zero value otherwise.

### GetRentalAmountOk

`func (o *EventSummaryInfoType) GetRentalAmountOk() (*float32, bool)`

GetRentalAmountOk returns a tuple with the RentalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalAmount

`func (o *EventSummaryInfoType) SetRentalAmount(v float32)`

SetRentalAmount sets RentalAmount field to given value.

### HasRentalAmount

`func (o *EventSummaryInfoType) HasRentalAmount() bool`

HasRentalAmount returns a boolean if a field has been set.

### GetRentalCode

`func (o *EventSummaryInfoType) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *EventSummaryInfoType) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *EventSummaryInfoType) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *EventSummaryInfoType) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetSetupCode

`func (o *EventSummaryInfoType) GetSetupCode() string`

GetSetupCode returns the SetupCode field if non-nil, zero value otherwise.

### GetSetupCodeOk

`func (o *EventSummaryInfoType) GetSetupCodeOk() (*string, bool)`

GetSetupCodeOk returns a tuple with the SetupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupCode

`func (o *EventSummaryInfoType) SetSetupCode(v string)`

SetSetupCode sets SetupCode field to given value.

### HasSetupCode

`func (o *EventSummaryInfoType) HasSetupCode() bool`

HasSetupCode returns a boolean if a field has been set.

### GetSetupTime

`func (o *EventSummaryInfoType) GetSetupTime() int32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *EventSummaryInfoType) GetSetupTimeOk() (*int32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *EventSummaryInfoType) SetSetupTime(v int32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *EventSummaryInfoType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetShareable

`func (o *EventSummaryInfoType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *EventSummaryInfoType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *EventSummaryInfoType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *EventSummaryInfoType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetSubEvent

`func (o *EventSummaryInfoType) GetSubEvent() bool`

GetSubEvent returns the SubEvent field if non-nil, zero value otherwise.

### GetSubEventOk

`func (o *EventSummaryInfoType) GetSubEventOk() (*bool, bool)`

GetSubEventOk returns a tuple with the SubEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubEvent

`func (o *EventSummaryInfoType) SetSubEvent(v bool)`

SetSubEvent sets SubEvent field to given value.

### HasSubEvent

`func (o *EventSummaryInfoType) HasSubEvent() bool`

HasSubEvent returns a boolean if a field has been set.

### GetTearDownTime

`func (o *EventSummaryInfoType) GetTearDownTime() int32`

GetTearDownTime returns the TearDownTime field if non-nil, zero value otherwise.

### GetTearDownTimeOk

`func (o *EventSummaryInfoType) GetTearDownTimeOk() (*int32, bool)`

GetTearDownTimeOk returns a tuple with the TearDownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTearDownTime

`func (o *EventSummaryInfoType) SetTearDownTime(v int32)`

SetTearDownTime sets TearDownTime field to given value.

### HasTearDownTime

`func (o *EventSummaryInfoType) HasTearDownTime() bool`

HasTearDownTime returns a boolean if a field has been set.

### GetType

`func (o *EventSummaryInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EventSummaryInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EventSummaryInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EventSummaryInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUseForecastRevenue

`func (o *EventSummaryInfoType) GetUseForecastRevenue() bool`

GetUseForecastRevenue returns the UseForecastRevenue field if non-nil, zero value otherwise.

### GetUseForecastRevenueOk

`func (o *EventSummaryInfoType) GetUseForecastRevenueOk() (*bool, bool)`

GetUseForecastRevenueOk returns a tuple with the UseForecastRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForecastRevenue

`func (o *EventSummaryInfoType) SetUseForecastRevenue(v bool)`

SetUseForecastRevenue sets UseForecastRevenue field to given value.

### HasUseForecastRevenue

`func (o *EventSummaryInfoType) HasUseForecastRevenue() bool`

HasUseForecastRevenue returns a boolean if a field has been set.

### GetWaitlistReturnStatus

`func (o *EventSummaryInfoType) GetWaitlistReturnStatus() BookingStatusType`

GetWaitlistReturnStatus returns the WaitlistReturnStatus field if non-nil, zero value otherwise.

### GetWaitlistReturnStatusOk

`func (o *EventSummaryInfoType) GetWaitlistReturnStatusOk() (*BookingStatusType, bool)`

GetWaitlistReturnStatusOk returns a tuple with the WaitlistReturnStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistReturnStatus

`func (o *EventSummaryInfoType) SetWaitlistReturnStatus(v BookingStatusType)`

SetWaitlistReturnStatus sets WaitlistReturnStatus field to given value.

### HasWaitlistReturnStatus

`func (o *EventSummaryInfoType) HasWaitlistReturnStatus() bool`

HasWaitlistReturnStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


