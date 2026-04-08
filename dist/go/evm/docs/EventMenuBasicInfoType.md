# EventMenuBasicInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassName** | Pointer to **string** | This type holds name of Menu Class Name. | [optional] 
**Name** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Restriction** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DietaryList** | Pointer to **[]string** |  | [optional] 
**EventTypes** | Pointer to **[]string** |  | [optional] 
**Type** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**QuickInsertCode** | Pointer to **string** | This type holds quick insert value, v5 functionality as Article Number for the Menu. | [optional] 
**ServingType** | Pointer to [**ServingType**](ServingType.md) |  | [optional] 
**ServingSize** | Pointer to **string** | This type holds TableCapacity for the given Menu. | [optional] 
**IncludedInMenu** | Pointer to **bool** | Return true, when all Menu Items added will be marked as Included and there will be a Global Price for this menu | [optional] 
**ConsumptionBased** | Pointer to **bool** | This type holds value of consumption, Menu items will be charged on a consumption basis. | [optional] 
**SellDateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**EventDateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**MenusSold** | Pointer to **int32** | The total number of menus sold for the day on which the event takes place. | [optional] 
**WebBookable** | Pointer to **bool** | This type tells about whether menu is book through web or not. | [optional] 
**Inactive** | Pointer to **bool** | Selection will comment this Menu is Inactive and unable to be added to a Catering Event. | [optional] 
**SalesPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**IncludedInPrice** | Pointer to **bool** | Return true means, menu item as Included in the Menu Price | [optional] 
**MultiChoice** | Pointer to **bool** | Indicator of this being a multi-choice menu | [optional] 
**CourseCount** | Pointer to **int32** | Define the Courses populated into the Multi Choice Menu Configuration | [optional] 
**MenuId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ServeStartEndTime** | Pointer to [**DateTimeRangeType**](DateTimeRangeType.md) |  | [optional] 
**Attendees** | Pointer to [**CateringEventsAttendeesType**](CateringEventsAttendeesType.md) |  | [optional] 
**DiscountPercentage** | Pointer to **float32** | Discount Percentage applied to Menu Amount. | [optional] 
**Order** | Pointer to **int32** | This field determines the order in which the menu has to be displayed on the manage resources screen. | [optional] 
**HotelId** | Pointer to **string** | Hotel code where event will be organized. | [optional] 

## Methods

### NewEventMenuBasicInfoType

`func NewEventMenuBasicInfoType() *EventMenuBasicInfoType`

NewEventMenuBasicInfoType instantiates a new EventMenuBasicInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventMenuBasicInfoTypeWithDefaults

`func NewEventMenuBasicInfoTypeWithDefaults() *EventMenuBasicInfoType`

NewEventMenuBasicInfoTypeWithDefaults instantiates a new EventMenuBasicInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassName

`func (o *EventMenuBasicInfoType) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *EventMenuBasicInfoType) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *EventMenuBasicInfoType) SetClassName(v string)`

SetClassName sets ClassName field to given value.

### HasClassName

`func (o *EventMenuBasicInfoType) HasClassName() bool`

HasClassName returns a boolean if a field has been set.

### GetName

`func (o *EventMenuBasicInfoType) GetName() TranslationTextType2000`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EventMenuBasicInfoType) GetNameOk() (*TranslationTextType2000, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EventMenuBasicInfoType) SetName(v TranslationTextType2000)`

SetName sets Name field to given value.

### HasName

`func (o *EventMenuBasicInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRestriction

`func (o *EventMenuBasicInfoType) GetRestriction() TranslationTextType2000`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *EventMenuBasicInfoType) GetRestrictionOk() (*TranslationTextType2000, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *EventMenuBasicInfoType) SetRestriction(v TranslationTextType2000)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *EventMenuBasicInfoType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetDescription

`func (o *EventMenuBasicInfoType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EventMenuBasicInfoType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EventMenuBasicInfoType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EventMenuBasicInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDietaryList

`func (o *EventMenuBasicInfoType) GetDietaryList() []string`

GetDietaryList returns the DietaryList field if non-nil, zero value otherwise.

### GetDietaryListOk

`func (o *EventMenuBasicInfoType) GetDietaryListOk() (*[]string, bool)`

GetDietaryListOk returns a tuple with the DietaryList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDietaryList

`func (o *EventMenuBasicInfoType) SetDietaryList(v []string)`

SetDietaryList sets DietaryList field to given value.

### HasDietaryList

`func (o *EventMenuBasicInfoType) HasDietaryList() bool`

HasDietaryList returns a boolean if a field has been set.

### GetEventTypes

`func (o *EventMenuBasicInfoType) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *EventMenuBasicInfoType) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *EventMenuBasicInfoType) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *EventMenuBasicInfoType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetType

`func (o *EventMenuBasicInfoType) GetType() MenuTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EventMenuBasicInfoType) GetTypeOk() (*MenuTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EventMenuBasicInfoType) SetType(v MenuTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *EventMenuBasicInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetQuickInsertCode

`func (o *EventMenuBasicInfoType) GetQuickInsertCode() string`

GetQuickInsertCode returns the QuickInsertCode field if non-nil, zero value otherwise.

### GetQuickInsertCodeOk

`func (o *EventMenuBasicInfoType) GetQuickInsertCodeOk() (*string, bool)`

GetQuickInsertCodeOk returns a tuple with the QuickInsertCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertCode

`func (o *EventMenuBasicInfoType) SetQuickInsertCode(v string)`

SetQuickInsertCode sets QuickInsertCode field to given value.

### HasQuickInsertCode

`func (o *EventMenuBasicInfoType) HasQuickInsertCode() bool`

HasQuickInsertCode returns a boolean if a field has been set.

### GetServingType

`func (o *EventMenuBasicInfoType) GetServingType() ServingType`

GetServingType returns the ServingType field if non-nil, zero value otherwise.

### GetServingTypeOk

`func (o *EventMenuBasicInfoType) GetServingTypeOk() (*ServingType, bool)`

GetServingTypeOk returns a tuple with the ServingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServingType

`func (o *EventMenuBasicInfoType) SetServingType(v ServingType)`

SetServingType sets ServingType field to given value.

### HasServingType

`func (o *EventMenuBasicInfoType) HasServingType() bool`

HasServingType returns a boolean if a field has been set.

### GetServingSize

`func (o *EventMenuBasicInfoType) GetServingSize() string`

GetServingSize returns the ServingSize field if non-nil, zero value otherwise.

### GetServingSizeOk

`func (o *EventMenuBasicInfoType) GetServingSizeOk() (*string, bool)`

GetServingSizeOk returns a tuple with the ServingSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServingSize

`func (o *EventMenuBasicInfoType) SetServingSize(v string)`

SetServingSize sets ServingSize field to given value.

### HasServingSize

`func (o *EventMenuBasicInfoType) HasServingSize() bool`

HasServingSize returns a boolean if a field has been set.

### GetIncludedInMenu

`func (o *EventMenuBasicInfoType) GetIncludedInMenu() bool`

GetIncludedInMenu returns the IncludedInMenu field if non-nil, zero value otherwise.

### GetIncludedInMenuOk

`func (o *EventMenuBasicInfoType) GetIncludedInMenuOk() (*bool, bool)`

GetIncludedInMenuOk returns a tuple with the IncludedInMenu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInMenu

`func (o *EventMenuBasicInfoType) SetIncludedInMenu(v bool)`

SetIncludedInMenu sets IncludedInMenu field to given value.

### HasIncludedInMenu

`func (o *EventMenuBasicInfoType) HasIncludedInMenu() bool`

HasIncludedInMenu returns a boolean if a field has been set.

### GetConsumptionBased

`func (o *EventMenuBasicInfoType) GetConsumptionBased() bool`

GetConsumptionBased returns the ConsumptionBased field if non-nil, zero value otherwise.

### GetConsumptionBasedOk

`func (o *EventMenuBasicInfoType) GetConsumptionBasedOk() (*bool, bool)`

GetConsumptionBasedOk returns a tuple with the ConsumptionBased field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionBased

`func (o *EventMenuBasicInfoType) SetConsumptionBased(v bool)`

SetConsumptionBased sets ConsumptionBased field to given value.

### HasConsumptionBased

`func (o *EventMenuBasicInfoType) HasConsumptionBased() bool`

HasConsumptionBased returns a boolean if a field has been set.

### GetSellDateRange

`func (o *EventMenuBasicInfoType) GetSellDateRange() DateRangeType`

GetSellDateRange returns the SellDateRange field if non-nil, zero value otherwise.

### GetSellDateRangeOk

`func (o *EventMenuBasicInfoType) GetSellDateRangeOk() (*DateRangeType, bool)`

GetSellDateRangeOk returns a tuple with the SellDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellDateRange

`func (o *EventMenuBasicInfoType) SetSellDateRange(v DateRangeType)`

SetSellDateRange sets SellDateRange field to given value.

### HasSellDateRange

`func (o *EventMenuBasicInfoType) HasSellDateRange() bool`

HasSellDateRange returns a boolean if a field has been set.

### GetEventDateRange

`func (o *EventMenuBasicInfoType) GetEventDateRange() DateRangeType`

GetEventDateRange returns the EventDateRange field if non-nil, zero value otherwise.

### GetEventDateRangeOk

`func (o *EventMenuBasicInfoType) GetEventDateRangeOk() (*DateRangeType, bool)`

GetEventDateRangeOk returns a tuple with the EventDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDateRange

`func (o *EventMenuBasicInfoType) SetEventDateRange(v DateRangeType)`

SetEventDateRange sets EventDateRange field to given value.

### HasEventDateRange

`func (o *EventMenuBasicInfoType) HasEventDateRange() bool`

HasEventDateRange returns a boolean if a field has been set.

### GetMenusSold

`func (o *EventMenuBasicInfoType) GetMenusSold() int32`

GetMenusSold returns the MenusSold field if non-nil, zero value otherwise.

### GetMenusSoldOk

`func (o *EventMenuBasicInfoType) GetMenusSoldOk() (*int32, bool)`

GetMenusSoldOk returns a tuple with the MenusSold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenusSold

`func (o *EventMenuBasicInfoType) SetMenusSold(v int32)`

SetMenusSold sets MenusSold field to given value.

### HasMenusSold

`func (o *EventMenuBasicInfoType) HasMenusSold() bool`

HasMenusSold returns a boolean if a field has been set.

### GetWebBookable

`func (o *EventMenuBasicInfoType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *EventMenuBasicInfoType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *EventMenuBasicInfoType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *EventMenuBasicInfoType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetInactive

`func (o *EventMenuBasicInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *EventMenuBasicInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *EventMenuBasicInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *EventMenuBasicInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetSalesPrice

`func (o *EventMenuBasicInfoType) GetSalesPrice() CurrencyAmountType`

GetSalesPrice returns the SalesPrice field if non-nil, zero value otherwise.

### GetSalesPriceOk

`func (o *EventMenuBasicInfoType) GetSalesPriceOk() (*CurrencyAmountType, bool)`

GetSalesPriceOk returns a tuple with the SalesPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesPrice

`func (o *EventMenuBasicInfoType) SetSalesPrice(v CurrencyAmountType)`

SetSalesPrice sets SalesPrice field to given value.

### HasSalesPrice

`func (o *EventMenuBasicInfoType) HasSalesPrice() bool`

HasSalesPrice returns a boolean if a field has been set.

### GetIncludedInPrice

`func (o *EventMenuBasicInfoType) GetIncludedInPrice() bool`

GetIncludedInPrice returns the IncludedInPrice field if non-nil, zero value otherwise.

### GetIncludedInPriceOk

`func (o *EventMenuBasicInfoType) GetIncludedInPriceOk() (*bool, bool)`

GetIncludedInPriceOk returns a tuple with the IncludedInPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInPrice

`func (o *EventMenuBasicInfoType) SetIncludedInPrice(v bool)`

SetIncludedInPrice sets IncludedInPrice field to given value.

### HasIncludedInPrice

`func (o *EventMenuBasicInfoType) HasIncludedInPrice() bool`

HasIncludedInPrice returns a boolean if a field has been set.

### GetMultiChoice

`func (o *EventMenuBasicInfoType) GetMultiChoice() bool`

GetMultiChoice returns the MultiChoice field if non-nil, zero value otherwise.

### GetMultiChoiceOk

`func (o *EventMenuBasicInfoType) GetMultiChoiceOk() (*bool, bool)`

GetMultiChoiceOk returns a tuple with the MultiChoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiChoice

`func (o *EventMenuBasicInfoType) SetMultiChoice(v bool)`

SetMultiChoice sets MultiChoice field to given value.

### HasMultiChoice

`func (o *EventMenuBasicInfoType) HasMultiChoice() bool`

HasMultiChoice returns a boolean if a field has been set.

### GetCourseCount

`func (o *EventMenuBasicInfoType) GetCourseCount() int32`

GetCourseCount returns the CourseCount field if non-nil, zero value otherwise.

### GetCourseCountOk

`func (o *EventMenuBasicInfoType) GetCourseCountOk() (*int32, bool)`

GetCourseCountOk returns a tuple with the CourseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCourseCount

`func (o *EventMenuBasicInfoType) SetCourseCount(v int32)`

SetCourseCount sets CourseCount field to given value.

### HasCourseCount

`func (o *EventMenuBasicInfoType) HasCourseCount() bool`

HasCourseCount returns a boolean if a field has been set.

### GetMenuId

`func (o *EventMenuBasicInfoType) GetMenuId() UniqueIDType`

GetMenuId returns the MenuId field if non-nil, zero value otherwise.

### GetMenuIdOk

`func (o *EventMenuBasicInfoType) GetMenuIdOk() (*UniqueIDType, bool)`

GetMenuIdOk returns a tuple with the MenuId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuId

`func (o *EventMenuBasicInfoType) SetMenuId(v UniqueIDType)`

SetMenuId sets MenuId field to given value.

### HasMenuId

`func (o *EventMenuBasicInfoType) HasMenuId() bool`

HasMenuId returns a boolean if a field has been set.

### GetServeStartEndTime

`func (o *EventMenuBasicInfoType) GetServeStartEndTime() DateTimeRangeType`

GetServeStartEndTime returns the ServeStartEndTime field if non-nil, zero value otherwise.

### GetServeStartEndTimeOk

`func (o *EventMenuBasicInfoType) GetServeStartEndTimeOk() (*DateTimeRangeType, bool)`

GetServeStartEndTimeOk returns a tuple with the ServeStartEndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServeStartEndTime

`func (o *EventMenuBasicInfoType) SetServeStartEndTime(v DateTimeRangeType)`

SetServeStartEndTime sets ServeStartEndTime field to given value.

### HasServeStartEndTime

`func (o *EventMenuBasicInfoType) HasServeStartEndTime() bool`

HasServeStartEndTime returns a boolean if a field has been set.

### GetAttendees

`func (o *EventMenuBasicInfoType) GetAttendees() CateringEventsAttendeesType`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *EventMenuBasicInfoType) GetAttendeesOk() (*CateringEventsAttendeesType, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *EventMenuBasicInfoType) SetAttendees(v CateringEventsAttendeesType)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *EventMenuBasicInfoType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetDiscountPercentage

`func (o *EventMenuBasicInfoType) GetDiscountPercentage() float32`

GetDiscountPercentage returns the DiscountPercentage field if non-nil, zero value otherwise.

### GetDiscountPercentageOk

`func (o *EventMenuBasicInfoType) GetDiscountPercentageOk() (*float32, bool)`

GetDiscountPercentageOk returns a tuple with the DiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountPercentage

`func (o *EventMenuBasicInfoType) SetDiscountPercentage(v float32)`

SetDiscountPercentage sets DiscountPercentage field to given value.

### HasDiscountPercentage

`func (o *EventMenuBasicInfoType) HasDiscountPercentage() bool`

HasDiscountPercentage returns a boolean if a field has been set.

### GetOrder

`func (o *EventMenuBasicInfoType) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *EventMenuBasicInfoType) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *EventMenuBasicInfoType) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *EventMenuBasicInfoType) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetHotelId

`func (o *EventMenuBasicInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventMenuBasicInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventMenuBasicInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventMenuBasicInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


